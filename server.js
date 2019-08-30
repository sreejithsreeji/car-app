const express=require('express');
const http=require('http');
const app=express();
const server=http.createServer(app);
require('dotenv').config();

const dbConnection=require('./dbconfig.js');

//middlewares
const cors=require('cors');
app.use(cors());
const morgon=require('morgan');
app.use(morgon('dev'))

//routes
dbConnection.connect()
.then(dbInstance=>{
    console.log(`mongo client is connected`)
    const carRoutes=require('./Routes/cars')(dbInstance);
    app.use('/api/v1/cars',carRoutes);

})
.catch(err=>{
    console.log(err)
})



server.listen(process.env.PORT,()=>{
    console.log(`server listening on port ${process.env.PORT}`)
})