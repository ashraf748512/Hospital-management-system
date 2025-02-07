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
profilePic:{
    type:String,
    default:""
},
phone:{
     type:String
},
address:{
    type:{
        type:String,
    }
},
gender:{
    type:String,
    enum:["Male","Female","Other"]
},
birthday:{
    type:String
},
role:{
    type:String,
    enum:["User","Staff"],
    default:"User"
},
accessToken:{
    type:String,
    default:""
},
expairsIn:{
    type:Number,
    default:0
}
},{timestamps:true})

const User= model("User",userSchema)

export default User;