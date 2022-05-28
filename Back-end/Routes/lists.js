const router = require("express").Router();
const verify = require("../VerfiyToken") ;
const List = require("../Models/List");

//Create new movie
router.post("/",verify, async (req, res)=>{
    if(req.user.isAdmin){

        const newList = new List({
        title: req.body.title,
        desc: req.body.desc,
        img:req.body.img,
        imgTitle:req.body.imgTitle,
        imgSm:req.body.imgSm,
        trailer:req.body.trailer,
        year:req.body.year,
        limit:req.body.limit,
        genre:req.body.genre,
        video: req.body.video,
    })
    
    try {
           const savedList= await newList.save();
            res.status(201).json(savedList); 
    }
    catch (error) {
        res.status(500).json(error);
    }
}
else{
    res.status(403).json("You are not Authorized");
} 
})


//Delete

//Create new movie
router.delete("/:id",verify, async (req, res)=>{
    if(req.user.isAdmin){

        const newList = new List({
        title: req.body.title,
        desc: req.body.desc,
        img:req.body.img,
        imgTitle:req.body.imgTitle,
        imgSm:req.body.imgSm,
        trailer:req.body.trailer,
        year:req.body.year,
        limit:req.body.limit,
        genre:req.body.genre,
        video: req.body.video,
    })
    
    try {
           await List.findByIdAndDelete(req.params.id);
            res.status(201).json("The list has been deleted!"); 
    }
    catch (error) {
        res.status(500).json(error);
    }
}
else{
    res.status(403).json("You are not an admin");
} 
})




//Get
router.get("/",verify,async(req,res)=>{
    const typeQuery = req.query.type;
    const genereQuery = req.query.genre;
    let list =[];

    try{
        if(typeQuery){
            if(genereQuery){
                list = await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typeQuery,genre:genereQuery}}
                ])
        }
        else{
            list = await List.aggregate([
                {$sample:{size:10}},
                {$match:{type:typeQuery}}
            ])
        }
    }
        else{
            list = await List.aggregate([{$sample:{size:10}}])
        }
        res.status(200).json(list);
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports=router;