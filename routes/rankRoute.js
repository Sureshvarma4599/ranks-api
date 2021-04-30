const express = require('express')
const router=express.Router()
const {json}= require('body-parser')
var ObjectId = require('mongoose').Types.ObjectId;
const {Rank}=require('../models/rank')
router.get('/',(req,res)=>{
    Rank.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log(json.stringify(err))
        }
    })
})
router.post('/',(req,res)=>{
    var data = new Rank({
        name:req.body.name,
        profile_link:req.body.rate,
        location:req.body.location,
        education:req.body.education,
        challenges_Solved:req.body.challenges_Solved,
        solutions_submitted:req.body.solutions_submitted,
        solutions_accepted:req.body.solutions_accepted,
        overall_rank:req.body.overall_rank,
        followers:req.body.followers,
        following:req.body.following,
        datastructures:req.body.datastructures,
        algorithms:req.body.algorithms,
        c_plus_plus:req.body.c_plus_plus,
        java:req.body.java,
        python:req.body.python,
        html:req.body.html,
        javascript:req.body.javascript,
        no_of_votes:req.body.no_of_votes,
        timestamp:req.body.timestamp,
        device_type:req.body.device_type

        
    })
    data.save((err,docs)=>{
        if(!err){
            res.send(docs)
        }
        else{
            console.log(json.stringify(err))
        }
    })
})
module.exports=router