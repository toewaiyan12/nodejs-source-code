const all = async (req,res,next)=>{
    res.json({msg:"All posts"});
}
const get = async (req,res,next)=>{
    res.json({msg:"Single posts"});
}
const post = async (req,res,next)=>{
    res.json({msg:"Add new post",result:req.body});
}
const patch = async(req,res,next)=>{
    res.json({msg:"Patch post"});
}
const drop = async(req,res,next)=>{
    res.json({msg:"Delete post" })
}
module.exports = {
    all,
    get,
    post,
    patch,
    drop
}