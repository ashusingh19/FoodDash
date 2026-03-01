import express from "express";
import Restaurant from "../models/restaurantsch.js";
const router = express.Router();
//to get all restaurant
router.get("/", async (req,res) =>{
        console.log("Request body",req.body);

    const restaurants = await Restaurant.find().populate("menu");
    res.json(restaurants);
});
  
//create a retaurant
router.post("/", async (req , res)=>{
        console.log("Request body",req.body);

    try {
        const restaurant = await Restaurant.create (req.body);
        return res.status(401).json(restaurant);
    } catch (error) {
        res.status(400).json({message:"error in restaurant create",error})
    }
});
export default router;