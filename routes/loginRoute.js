const express = require('express');
const router=express.Router();
const bcrypt =require('bcrypt')

var {User} = require('../models/User')
 router.post('/',(req,res)=>{
     console.log(req.body.email)
     console.log(req.body.password)
    User.findOne({email:req.body.email})
     .then(user=>{
         if(!user)
         res.sendStatus(204);
         else{
             bcrypt.compare(req.body.password,user.password)
             .then(passwordMatch=>passwordMatch? res.send(req.body.email):res.sendStatus(204))
         }
     })
 })


 module.exports=router;