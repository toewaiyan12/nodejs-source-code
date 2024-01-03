const express = require("express");
let app = express();
app.get("/user",(req,res,next)=>{
res.status(200).json({name:"MGMG",age:30,subject:"node js"});

});
app.post("/user",(req,res)=>{
    res.status(200).json({msg:"user register success"});
});
app.get("*",(req,res)=>{
    res.json({msg:"No route Found"});
});
app.patch("/user/:id/:name",(req,res)=>{
    let id=req.params.id;
    let name=req.params.name;
    res.status(200).json({msg:`edit user id ${id}and name is ${name}`});
});
app.delete("/user/:id",(req,res)=>{
    let id =req.params.id;
    res.json({msg:"delete id is"+ id});
});
//app.listen(3030,console.log("server is running"));