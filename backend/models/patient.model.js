import {Schema,model} from "mongoose";
/*
Patient Collection:

_id: Unique identifier.
name: Full name.
dob: Date of birth.
gender: Male/Female/Other.
contact: Phone number and email.
address: Home address.
medical_history: Array of past treatments, diagnoses, and reports.
*/

const patientSchema=new Schema({
user_id:{
    type:Schema.Types.ObjectId,
    ref:"User"
},
    fullName:{
    type:String,
    require:true
 }, 
 dob:{
   type:Date,
 },
 gender:{
    type:String,
    enum:["male","female","other"]
 },
 address:{
    type:String,

},
// TODO:i'll do this later
medicalHistory:{
    type:String,
    enum:["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
},
contact:{
    type:String,
    required:true
},
},{timestamps:true})

const Patient= model("Patient",patientSchema)

export default Patient;