const mongoose = require('mongoose');
const Admin = mongoose.model('Admin',{
    email:{
        type : String,
        unique:true,
        required:true
    },
    password:{
        type:String
    }
})
module.exports={Admin};