const { generateToken } = require('../Middleware/auth');
const userModel = require('../Models/user.model')
const bcrypt = require('bcryptjs')

const signup=async(req,res)=>{
    const {fullName,email,password,confirmPassword} = req.body;

    try{
        if(password !== confirmPassword){
            return res.status(400).json({message:'Password do not match!!'})
        }
    
        const user = await userModel.findOne({email})
        if(user){
            return res.status(400).json({message:'Email already Exists!!'})
        }
    
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await new userModel({
            fullName,
            email,
            password:hashedPassword,
        })
    
        await newUser.save()

        if(newUser){
           await generateToken(newUser._id,res)
        }

        console.log('user Registerd!!')
        return res.status(201).json({message:'User Registered Successfully!!',
            user:{
            id:newUser._id,
            email:newUser.email,
            name:newUser.fullName
        }}) 
    }
    catch(err){
        console.log(err,'error while register---------');
        res.status(500).json({message:'Internal Server Error!!'})
    }

}


const login = async(req,res) =>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message:'User not found!!'})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(404).json({message:'Invalid User or Password!!'})
        }

        await generateToken(user._id,res);

        return res.status(201).json({message:'User Logged In Successfully!!',user:{
            id:user._id,
            email:user.email,
            name:user.fullName
        }})

        
    }
    catch(err){
        console.log(err,'err while logging in ---------------------')
        res.status(500).json({message:'Internal Server Error!!'})
    }
}


const logout =async(req,res)=>{
    try{
        await res.clearCookie('jwt');
        console.log('User Logged Out Successfully')
        return res.status(201).json({message:'User Logged Out Successfully'})
    }
    catch(err){
        console.log(err,'err while logging out ---------------------')
        return res.status(500).json({message:'Internal Server Error!!'})
    }
}


const getUsers=async(req,res)=>{
    try{
        const loggedInUser = req.user._id
        const allUsers = await userModel.find({_id:{$ne : loggedInUser}}).select('-password');
        return res.status(201).json({users:allUsers})
    }
    catch(err){
        console.log(err,'error in getting users');
        return res.status(500).json({err:err,message:'Internal Server Error!!'})
    }
}





module.exports={signup,login,logout,getUsers}