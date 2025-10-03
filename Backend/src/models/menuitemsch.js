import mongoose from "mongoose";
const menuItemSchema = new mongoose.Schema({
     name:{
        type:String,
        require:true
     },
     price:Number,
     description:String,
     image:String,
     restaurantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"restaurantsch"
     }
}, {timestamps:true})
export default mongoose.model("MenuItem",menuItemSchema);