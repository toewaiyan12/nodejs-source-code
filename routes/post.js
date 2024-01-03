const router = require("express").Router();
router.get("/",(req,res)=>{
    res.json({msg:"All post route"});
});

router.post("/",(req,res)=>{
    res.json(req.body);
});
router.route("/:id")
.get((req,res)=>res.json({msg:"request id is"+req.params.id}))
.patch ((req,res)=>res.json({msg:"edit id is"+req.params.id}))
.delete((req,res)=>res.json({msg:"delete id is"+req.params.id}))



/*router.get("/:id",(req,res)=>{
    let id = req.params.id;
    res.json({msg:"Get post id is"+id});
 });
router.patch("/:id",(req,res)=>{
    res.json({msg:"Edit id is"+req.params.id});
})
router.delete("/:id",(req,res)=>{
    res.json({msg:"Delete id is"+req.params.id});
})
*/
module.exports= router;