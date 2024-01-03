const router = require('express').Router();

router.get("/",(req,res)=>{
res.json({msg:"all user route"});
});
router.post("/",(req,res)=>{
    res.json(req.body);
});
router.route("/:id")
.get((req,res)=>res.json({msg:"request id is"+req.params.id}))
.delete((req,res)=>res.json({msg:"delete id is"+req.params.id}))
/*router.get("/:id",(req,res)=>{
    let id = req.params.id;
    res.json({mag:"id is"+ id});
});

router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    res.json({mag:"id is"+ id});
})
*/
module.exports=router;
