import {Schema,model} from "mongoose";

const userSchema=new Schema({
fullName:{
    type:String,
    require:true
 }, 
 email:{
    type:String,
    required:true,
    unique:true
},

password:{
    type:String,
    required:true,
    minlength:6
},
role:{
    type:String,
    enum:["User","Staff"],
    default:"User"
}
},{timestamps:true})

const User= model("User",userSchema)

export default User;