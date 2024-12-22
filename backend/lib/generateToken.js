import jwt from "jsonwebtoken"

export function generateToken(userId,res){
   try {
     const token=jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"7d"
     });
     if(token){
        res.cookie("jwt",token,{
            maxAge:7*24*60*60*1000,
            httpOnly:true,
            sameSite:"strict"
        })
        return token;
     }
   } catch (error) {
     console.log(error, "error while generating token")
   }
}