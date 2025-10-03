import jwt from "jsonwebtoken";
import User from "../models/userlog.js";
const protectRoute = async (req,res,next) =>{
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token){
            return res.status(400).json({message:"no token provided"})
        }
        const decode = jwt.verify(token,process.env.jwt_SECRET);
        const user = await User.findById(decode.UserId).select("_password");
        if(!user){
            return res.status(400).json({message:"user not found"});
        }
        req.user = user; //attach user object 
        next();
    } catch (error) {
        console.error("auth middleware error",error);
        return res.status(400).json({message:"token is not valid"});
    }
}
export default protectRoute;