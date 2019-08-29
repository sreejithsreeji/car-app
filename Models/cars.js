

const sort= (dbInstance,filterOpts,onePageLength=10,pageNumber=1)=>{
    
    return new Promise((resolve,reject)=>{
        dbInstance.collection('vehicles')
        .aggregate([
            {$sort:filterOpts}
        ])
        .skip((parseInt(pageNumber||1)-1)*onePageLength)
        .limit(onePageLength)
        .toArray((err,data)=>{
            if(err) reject(err);
            resolve({
                code:200,
                status:true,
                message:'Products',
                page:pageNumber,
                maxPerPage:onePageLength,
                results:data
            })
            
        })
    })
  
}

const get=(dbInstance,maxPerPage=10,page=1)=>{
    
    return new Promise((resolve,reject)=>{
        dbInstance.collection('vehicles')
        .find()
        .skip((parseInt(page||1)-1)*maxPerPage)
        .limit(parseInt(maxPerPage))
        .toArray((err,data)=>{
            if(err) reject(err);
            resolve({
                code:200,
                status:true,
                message:'Products',
                page:page,
                maxPerPage:maxPerPage,
                results:data
            })
            
        })
    })
}

module.exports={
    sort,
    get
}