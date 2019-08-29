const express=require('express');
const carController=require('../Controllers/cars.js');
const router=express.Router({mergeParams:true});

module.exports=function(dbInstance){
  
    router.get("/sort-by?",(req,res)=>{
        carController.sort(req,res,dbInstance);
    })

    router.get("/?",(req,res)=>{
        carController.getCars(req,res,dbInstance);
    })

    
    return router;
};