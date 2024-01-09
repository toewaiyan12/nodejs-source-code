const router = require("express").Router();
const controller= require("../controller/post");

router.get("/", controller.all);
router.post("/", controller.post);

router.route("/:id")
.get(controller.get)
.patch (controller.patch)
.delete(controller.drop)

module.exports= router;
/*router.get("/",(req,res)=>{
    res.json({msg:"All post route"});
});
router.post("/",(req,res)=>{
    res.json(req.body);
});*/

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
