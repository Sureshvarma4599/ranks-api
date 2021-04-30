const mongoose = require('mongoose');
const User = mongoose.model('User',{
    email:{
        type : String,
        unique:true,
        required:true
    },
    password:{
        type:String
    }
})
module.exports={User};