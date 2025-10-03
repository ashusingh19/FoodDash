import mongoose from "mongoose";
 const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    address:String,
    cuisine:String,
    image:String,
    menu:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"menuitemsch"
    },
    owner:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"userlog"
    }
 }, {timestamps:true});
 export default mongoose.model("Restaurant",restaurantSchema);