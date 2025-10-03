import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/userlog.js";
const router = express.Router();
const generateToken = (UserId)=>{
    return jwt.sign({UserId},process.env.jwt_SECRET,{expiresIn:'9d'});
    }
    router .post ('/register', async (req,res)=>{
        console.log("Request body:",req.body);
        try {
            const {username,password,email,fullname} = req.body;
            if(!username || !password || !email || !fullname){
               return res.status(400).json({message:"All field are required"});
            }
            if (password.length < 6){
                return res.status(400).json({message:"password must be 6 character"});
               }
            if (username.length < 3){
                return res.status(400).json({message:"password must be 6 character"});
             }
            if (fullname.length < 3){
                return res.status(400).json({message:"password must be 6 character"});
                 }
            
           const  existingusername = await User.findOne({username});
           if (existingusername){
            return res.status(400).json({message:"Already have a account"});
             }
            //  const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User ({
            username,
            password,
            email,
            fullname
        });
        await user.save();
        const token = generateToken(user._id);
        res.status(201).json({
            token,
            User:{
                id:user._id,
                username:user.username,
                password:user.password,
                email:user.email,
                fullname:user.fullname
            }
        }, {timestamps:true})
        } catch (error) {
           console.log('error in register route :',error) ;
           res.status(500).json({message:"internet server error"});
        }
    });

    router.post('/login', async (req,res)=>{
        console.log("request body",req.body);
        try {
         const {username,password}= req.body;
         if(!username || !password){
           return res.status (400).json({message:"field are required"});
         }
           const user = await User.findOne({username});
           if(!user){
            return res.status(400).json({message:"invalid credential(usrename)"});
           }
           const isPasswordCorrect =await user.comparePassword(password)
           if(!isPasswordCorrect){
            return res.status(400).json({message:"invalid credential (password)"});
           }
           
         const token = generateToken(user._id);
         res.status(200).json({
            message:"login successfully",
            token,
            user:{
                id:user._id .toString(),
                username:user.username,
                email:user.email,
                fullname:user.fullname
            }
         })
        } catch (error) {
          console.log('error in login route ',error);
          res.status(500).json({message:"internet server error"});  
        }
    })
  export default router