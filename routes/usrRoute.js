const express = require('express')
const router =express.Router()
var bcrypt =require('bcrypt')
var ObjectId = require('mongoose').Types.ObjectId;

var {User}=require('../models/User')
router.get('/',(req,res)=>{
    User.find((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(json.stringify(err))
        }
    })
})

router.post('/',(req,res)=>{
    var user = new User(req.body)
    user.password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(8),null);
    user.save((err,docs)=>{
    if(!err){
        res.send(docs)
    }else{
        console.log(json.stringify(err))
    }
})
})
module.exports=router;