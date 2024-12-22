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
age:{
    type:Number,
    required:true
 },
gender:{
    type:String,
    enum:["male","female","other"]
 },
address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true, default: "India" }
  },
medicalHistory: [
    {
      date: { type: Date, required: true },
      condition: { type: String, required: true },
      treatment: { type: String, required: true },
      doctor: { type: String },
      notes: { type: String }
    }
  ],
contact:{
    type:String,
    required:true
},
},{timestamps:true})

const Patient= model("Patient",patientSchema)

export default Patient;