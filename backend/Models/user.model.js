const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        require:true
    },
    confirmPassword:{
        type:String,
        require:true
    }
},{
    timestamps:true //created at or updated at
})


const userModel = mongoose.model('user',userSchema)

module.exports =  userModel;