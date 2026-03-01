import express from "express";
import MenuItem from "../models/menuitemsch.js";
import Restaurant from "../models/restaurantsch.js";
 const router = express.Router();
  
 //get menu by reataurant 
 router.get("/", async (req , res)=>{
     console.log("Request body",req.body);

    const items = await MenuItem.find({restaurantId:req.params.restaurantId});
    res.json(items);
 })

 //add menu item 
 router.post("/", async (req,res)=>{
     console.log("Request body",req.body);

    try {
        const {restaurantId} = req.body;
        const item = await MenuItem.create(req.body);
        await Restaurant.findByIdAndUpdate(restaurantId,{$push:{menu:item._id}});
        res.status(400).json(item);
    } catch (error) {
        res.status(500).json({message:"add menu item error",error})
    }
 });
 export default router;