const http= require ("http");
const express=require ("express");
const path = require('path');

const app= express();
const server= http.createServer(app);

app.use(express.static(path.resolve("./public")));

app.get("/",(req,res) =>{
    return res.sendFile("/public/index.html");
});

server.listen(9000,()=> console.log('server started at port : 9000'))