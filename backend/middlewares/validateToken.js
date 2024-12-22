import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
export async function protectedRoute(req,res,next){
 try {
    const token=req.cookies.jwt;
    if(!token)return res.status(401).json({"message":"no token found"});
   
    const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
   
    if(!decoded)return res.status(401).json({"message":"invalid token!!!"});

     const user=await User.findById(decoded.userId);
     if(!user)return res.status(401).json({"message":"invalid token!!!"});
     const { password, ...safeUser } = user.toObject();
     
     req.user={...safeUser
     };
     next();
     
 } catch (error) {
    console.log(error.message,"error in protectedRoute middleware")
    return res.status(500).json({"error":"internal server error"})
 }
}