import mongoose from "mongoose";
const orderSchema = ({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userlog"
    },
    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"restaurantsch"
    },
    menuItemId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"menuitemsch"
    },
    name:String,
    price:Number,
    quantity:{
        type:Number,
        default:1
    },
    totalPrice:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        enum:["cart","placed","preparing","out_for_delivery","delivered"],
        default:"cart"
    },
    paymentMode:{
        type:String,
        enum:["COD","Online"],
        default:"COD"
    }
},{timestamps:true});
orderSchema.methods.recalculateTotal= function(){
    this.totalPrice = this.items.reduce((sum,i)=> sum + i.price * i*quantity,0);
    return this.totalPrice;
}
export default mongoose.model("Order",orderSchema);