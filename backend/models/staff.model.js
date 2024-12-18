import {Schema,model} from "mongoose";
/*
Attributes:

Staff Collection:

_Staff Collection (Including Doctors):

_id: Unique identifier (MongoDB ObjectID).
name: Staff member's full name.
role: Enum (Admin, Nurse, Pharmacist, Doctor, etc.).
specialization: Applies only to doctors (e.g., Cardiologist, Orthopedic).
availability: Weekly schedule (array of time slots, applicable for doctors).
contact: Phone number and email.
shift: Morning, Evening, Night (for nurses or other staff).
experience: Years of experience (for doctors).
salary: Staff member's monthly salary (optional for tracking HR data).
*/
const staffSchema=new Schema({
user_id:{
        type:Schema.Types.ObjectId,
        ref:"User"
},   
fullName:{
    type:String,
    require:true
}, 
 role:{
    type:String,
    enum:["Admin","Doctor","Nurse", "Pharmacist","receptionist","cleaning"]
    
},
specialization:{
    type:String,
    enum:["Cardiologist","Dermatologist"]
    
},

availability:{
    type:String,
    enum:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
},
contact:{
    type:string
},
shift:{
    type:String,
    enum:["Morning","Evening","Night"]
},
experience:{
    type:String,
},
salary:{
  type:String,
}

},{timestamps:true})

const Staff= model("Staff",staffSchema)

export default Staff;