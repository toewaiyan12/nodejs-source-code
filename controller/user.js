

const db= require('../dbs/user');
const helper=require('../util/help');
const all =async (req,res,next)=>{
   let users=await db.find();
   helper.FMsg(res,"All users",users);
}
const add= async(req,res,next)=>{
  let saveUser = new db(req.body);
   let result= await saveUser.save();
   helper.FMsg(res,"User Added",result);
}
const get =async(req,res,next)=>{
   let id= req.params.id;
   let user= await db.findById(id);
   helper.FMsg(res,"single user get",user);
}
const patch=async(req,res,next)=>{
   let user= await db.findById(req.params.id);
   if(user){
    await db.findByIdAndUpdate(user._id,req.body);
    let retUser = await db.findById(user._id);
    helper.FMsg(res,"update updated",retUser);
   }else{
   next(new Error("Error,no user with that id"))
   }
}
const drop =async(req,res,next)=>{
   await db.findByIdAndDelete(req.params.id);
   helper.FMsg(res,"user deleted");
}
module.exports={
    all,
    add,
    get,
   patch,
   drop
};