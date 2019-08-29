
const carModel=require('../Models/cars.js');
const _ =require('lodash');

const sort=async (req,res,dbInstance)=>{
  
    const sortOptions=['brand','model','trim','default'];
    let filterOpts={}
    const {page=1,limit=10}=req.query;
    
    //creating object for availabe sorting keys

    for(let key in req.query){
        if(Object.prototype.hasOwnProperty.call(req.query,key)){
            if(sortOptions.find((x)=>{
                return x===req.query[key]
            }) ){
                filterOpts[req.query[key]]=1 
            }
        
        }
    }
    
    if(_.isEmpty(filterOpts)){
        
        const result=await carModel.get(dbInstance,limit,page);
        res.status(200).send(result);

    }else{
        const result=await carModel.sort(dbInstance,filterOpts,limit,page);
        res.status(200).send(result);
    }
}

const getCars=(req,res,dbInstance)=>{
    const {limit=10,page=1}=req.query
    carModel.get(dbInstance,limit,page)
    .then(cars=>{
        res.status(200).send(cars);
    })
    .catch(err=>{
        res.status(500).send('internal server error');
    })
}

module.exports={
    sort,
    getCars
}