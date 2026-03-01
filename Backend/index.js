import express from "express";
import {connectdb} from "./src/conndb/connectdb.js";
import dotenv from "dotenv";
import authRoutes from "./src/routes/authRoutes.js";
import restaurant from "./src/routes/restaurant.js";
import menu from "./src/routes/menu.js";
import order from "./src/routes/order.js";
dotenv.config();
const app = express();
const PORT = 3000
app.use(express.json());
 app.use('/api/auth',authRoutes);
 app.use('/api/restaurant',restaurant);
 app.use('/api/menu',menu);
 app.use('/api/order',order);
const start = async()=>{
    try {
        await connectdb();
       app.listen(PORT,'0.0.0.0',(err,addr)=>{
        if (err){
            connectdb.error(err);
        }else{
            console.log(`Server connected:http://localhost:${PORT}`)
        }
       })
        
    } catch (error) {
        console.error('error,restart server',error)
        
    }
}
app.get('/',(req,res)=>{
    res.send('hello')
})
start();