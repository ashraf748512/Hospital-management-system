import User from "../models/user.model.js"
import {generateToken} from "../lib/generateToken.js"
import bcrypt from "bcryptjs"
import crypto from "crypto"
import {sendPasswordResetEmail} from "../lib/sendMailToUser.js"


export async function signup(req,res){

 const {fullName,email,password}=req.body;
 try {
    if(!fullName||!email||!password)return res.status(400).json({"message":"All feilds are required"});
    if(password.length<6)return res.status(400).json({"message":"password length must be atleast 6 chacracter"});
    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({ message:"Email  already exists"}) 
    }
    const salt=await bcrypt.genSalt(10)
    const hashadPassword= await bcrypt.hash(password,salt);
   
    const newUser=await User.create({
       fullName,
       email,
       password:hashadPassword
    });
  if(newUser){
    generateToken(newUser._id,res);
    return res.status(201).json({
      _id:newUser._id,
      fullName:newUser.fullName,
      email:newUser.email
    })
}else{
    return res.status(400).json({"message":"invalid user Data"})
}
 } catch (error) {
    console.log(error.message," error in signup authController")
    return res.status(500).json({"message":"Internal server error"})
 }


}

export async function login(req,res){
   
 const {email,password}=req.body;
 try {
    if(!email||!password)return res.status(400).json({"message":"All feilds are required"});
    if(password.length<6)return res.status(400).json({"message":"password length must be atleast 6 chacracter"});

    const user=await User.findOne({email})
    if(!user){
       return res.status(400).json({message:"Invalid credentials !!"}) 
    }
    const isPasswordCorrect=bcrypt.compare(password,user.password);
    if(!isPasswordCorrect)return res.status(400).json({message:"Invalid credentials !!"}) 
     generateToken(user._id,res);
    return res.status(201).json({
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        role:user.role,
        gender:user.gender,
        address:user.address,
        birthday:user.birthday,
        phone:user.phone
    })
   
 } catch (error) {
    console.log(error.message," error in login authController")
    return res.status(500).json({"message":"Internal server error"})
 }

}

export function logout(req,res){
 try {
     res.cookie("jwt","",{
       maxAge:0
     })
     return res.status(201).json({message:"logout successfully"})
 } catch (error) {
    console.log(error.message," error in logout authController")
    return res.status(500).json({"message":"Internal server error"})
 }
}
export async function forgotPassword(req,res){
  const user=req.user;
  console.log(user)
try {
     
     if(!user)return res.status(400).json({message:"You are Unauthorize !!"})
      const token=crypto.randomBytes(32).toString('hex')
     const updatedUser=await User.findByIdAndUpdate(user._id,{$set:{accessToken:token,expairsIn:Date.now()+10*60*1000}});
     sendPasswordResetEmail(updatedUser.email,token,process.env.BASE_URL);
     return res.status(200).json({
      message:"check your gmail email send it to you"
     })
} catch (error) {
   console.log(error.message +" Error in forgot password controller")
    return res.status(500).json({message:"Internal server error"})
}

}

export async function resetPassword(req, res) {
    const { email } = req.user;
    const { token } = req.query;
    const { newPassword, confirmPassword } = req.body;

    try {
        if (!token) return res.status(400).json({ message: "Token not found" });

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "You are not Authenticated!!" });
        }


        if (existingUser.accessToken === token&&existingUser.expairsIn>Date.now()) {
            if (!newPassword || !confirmPassword) return res.status(400).json({ message: "All fields are required" });
            if (newPassword.length < 6 || confirmPassword.length < 6) return res.status(400).json({ message: "Password length must be at least 6 characters" });
            if (newPassword.trim() !== confirmPassword.trim()) return res.status(400).json({ message: "New Password and Confirm Password must be the same" });

            // Await the result of genSalt and hash functions
            const salt = await bcrypt.genSalt(10); // Await salt generation
            const hashedPassword = await bcrypt.hash(newPassword, salt); // Await password hashing

            if (existingUser.accessToken !== "") {
                const updatedUser = await User.findOneAndUpdate(
                    { email },
                    { $set: { password: hashedPassword, accessToken: "",expairsIn:0 } }
                );
            }

            return res.status(201).json({
                message: "Password reset successfully"
            });
        } else {
            return res.status(400).json({
                message: "Either token is not valid or expired"
            });
        }

    } catch (error) {
        console.log(error.message, "error in reset password authController");
        return res.status(500).json({ message: "Internal server error" });
    }
}
export const checkAuth=(req, res)=>{
    try {
      res.status(200).json(req.user)
    } catch (error) {
      console.log("error in checkAuth controllers"+error.message)
      res.status(500).json({message:"Internal server error"})
    }
  }
