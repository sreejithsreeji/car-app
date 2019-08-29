const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
require('dotenv').config();


const databases={
    dev:{
        url:"",
        dbName:"inventoryDB"
    }
}

 const dbConnection={
    connect:()=>{
        const uri=process.env.CONNECTION_STRING.toString().replace("<PASSWORD>",process.env.MONGO_PASSWORD) ;
        return new Promise((resolve,reject)=>{
            MongoClient.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}, function(err, client) {
                if(err) reject(err);
                assert.equal(null, err);
                resolve(client.db(databases.dev.dbName))
              });
    })}
}


module.exports=dbConnection