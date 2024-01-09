
const router = require('express').Router();
const controller=require("../controller/user")
router.get("/",controller.all);
router.post("/",controller.add);


router.route("/:id")
.get(controller.get)
.patch(controller.patch)
.delete(controller.drop)

//.delete((req,res)=>res.json({msg:"delete id is"+req.params.id}))
module.exports=router;

//router.route("/")
//.get((req,res)=>res.json({msg:"all user route"}))
//.post((req,res=>res.json(req.body)))

/**/
/*router.get("/:id",(req,res)=>{
    let id = req.params.id;
    res.json({mag:"id is"+ id});
});

router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    res.json({mag:"id is"+ id});
})
*/

