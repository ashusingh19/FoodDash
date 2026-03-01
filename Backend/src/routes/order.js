import express from "express";
import Order from "../models/ordersch.js";
import MenuItem from "../models/menuitemsch.js";
const router = express.Router();
  // create cart for user 
  router.get("/cart/:userId" , async (req,res)=>{
    console.log("Create body",req.body);
    let cart = await Order.findOne({userId:req.params.userId,status:"cart"});
     if (!cart) cart  = await Order.create({userId:req.params.userId, items:[]});
     res.json(cart);
  });
  // add item to cart 
  // router.post("/cart/add", async (req,res) =>{
  //   console.log("Request body",req.body);
  //   const {userId,menuItemId} = req.body;
    
  //   const menuItem = await MenuItem.findById(menuItemId);
  //   let cart = await Order.findOne({userId,status:"cart"});
  //   if (!cart){
  //     cart = await Order.create({userId,restaurantId:menuItem.restaurantId,items:[]});
  //   }
  //   const idx = cart.items.findIndex(i=>i.menuItemId.toString()=== menuItemId);
  //   if (idx > -1) {
  //       cart.items[idx].quantity += 1;

  //   }else cart.items.push({menuItemId, name:menuItem.name,price:menuItem.price , quantity:1});
  //   cart.recalculateTotal();
  //   await cart.save();
  //   res.json(cart);
  // });
  router.post("/cart/add", async (req, res) => {
  try {
    console.log("Request body", req.body);
    const { userId, menuItemId } = req.body;

    const menuItem = await MenuItem.findById(menuItemId);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }

    let cart = await Order.findOne({ userId, status: "cart" });
    if (!cart) {
      cart = await Order.create({ userId, restaurantId: menuItem.restaurantId, items: [] });
    }

    const idx = cart.items.findIndex(i => i.menuItemId.toString() === menuItemId);
    if (idx > -1) {
      cart.items[idx].quantity += 1;
    } else {
      cart.items.push({ menuItemId, name: menuItem.name, price: menuItem.price, quantity: 1 });
    }
    
    cart.recalculateTotal();
    await cart.save();
    res.json(cart);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

  //reduce item quantity
  router.post("/cart/reduce",async(req,res)=>{
    const {userId,menuItemId} = req.body;
    const cart = await Order.findOne({userId, status:"cart"});
    if (!cart){
        return res.status(400).json({message:"cart not found"});
    }
    const idx = cart.items.findIndex(i => i.menuItemId.toString()===menuItemId);
    if (idx >-1){
        cart.items[idx].quantity -= 1;
        if(cart.items[idx].quantity <= 0)cart.items.splice(idx,1);
    }
    cart.recalculateTotal();
    await cart.save();
    res.json(cart);
  });
  // place order for delivery
  router.post("/place",async (req,res) =>{
    const {userId,paymentMode} = req.body;
    const cart = await Order.findOne({userId,status:"cart"});
    if(!cart || cart.items.length === 0){
        return res.status(400).json({message:"cart empty"});
    }
    cart.status = "placed";
    cart.paymentMode = paymentMode || "COD";
    cart.recalculateTotal();
    await cart.save();
    res.json({message:"order placed " , order :cart});
  });
  export default router;