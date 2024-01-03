const express = require("express");
const app=express();
app.use(express.json());

let users=[
    {id:1,name:"mgmg",age:29},
   {id:2,name:"kaung",age:29},
   {id:3,name:"uzaw",age:29}
]
app.get("/user",(req,res)=>{
    res.json(users);
});
app.get("/users/:id",(req,res) =>{
let id = req.params.id;
let user=users.find(usr=>usr.id=id);
if(user){
    res.json(user);
}else{
    res.json("error");
}
})
app.get("*",(req,res)=>{
    res.json({msg:"No route Found"});
});
app.post("/user",(req,res)=>{
    let id=req.body.id;
    let name =req.body.name;
    let age=req.body.age;
    let newuser = {
        id:id,
        name:name,
        age:age
    };
    users.push(newuser);
    res.json({users});
    res.json({msg:"user post method"});
})
app.patch("/user/:id",(req,res)=>{
    let id = req.params.id;
    let edit=users.find(us=>us.id==id);
    if(edit){
        edit.name=req.body.name;
        res.json(users);
    }else{
        res.json({msg:"err"})
    }
});
app.delete("/user/:id",(req,res)=>{
    let id = req.params.id;
    users = users.filter(usr=>usr.id==id);
    res.json(users);
});


//app.listen(3090,console.log("server is running"));


