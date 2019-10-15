const express = require('express');
const routing=express.Router();
const flightBookingServ=require('../service/users');
const Entry=require('../model/entryClass');

routing.post('/addEntry',(req,res,next) =>{
    const entryObj=new Entry(req.body);
    console.log("Inside Express Router")
    flightBookingServ.addEntry(entryObj).then((bookingId)=>{
        res.json({"message":"Flight booking is successful with booking Id:"+bookingId});
    }).catch((err)=>next(err)
    )
})

routing.get('/report',(req,res,next)=>{
    
})
module.exports=routing;