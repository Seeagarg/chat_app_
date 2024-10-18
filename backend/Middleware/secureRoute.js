const jwt = require('jsonwebtoken')
const userModel = require('../Models/user.model')

const secureRoute=async(req,res,next)=>{
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1]
        console.log(token,'token----------------------')
        if(!token){
            return res.status(401).json({message:'Not Authorized!!'})
        }


        const verified = jwt.verify(token,process.env.JWT_SECRET)
        if(!verified){
            return res.status(401).json({message:'Invalid token!!'})
        }

        const user = await userModel.findById(verified.userId).select('-password')
        if(!user){
            return res.status(404).json({message:'User Not found!!'})
        }

        req.user = user
        next()
    }
    catch(err){
        console.log(err,'errr---===---===--==--=')
        res.status(500).json({err:err,message:'Internal Server Error!!'})
    }
}

module.exports = {secureRoute}