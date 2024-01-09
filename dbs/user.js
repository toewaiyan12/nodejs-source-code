const mongoose =require ('mongoose');
const {Schema}= mongoose;
 
const userschema= new Schema({
    "name":{type:String,required:true,unique:true},
    "email":{type:String,required:true,unique:true},
    "phone":{type:String,required:true,unique:true},
    "password":{type:String,required:true}
});
const User=mongoose.model("user",userschema)
module.exports=User;