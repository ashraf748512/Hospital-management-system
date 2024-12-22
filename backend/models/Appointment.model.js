import {Schema,model} from "mongoose";
/*
_id: Unique identifier.
patient_id: Reference to the patient (ObjectID).
doctor_id: Reference to the doctor (ObjectID).
date: Appointment date and time.
status: Scheduled/Completed/Cancelled.
const {patient_id,doctor_id,dateTime,status}=req.body
*/
const appointmentSchema=new Schema({
    patient_id:{
    type:Schema.Types.ObjectId,
    ref:"User",
    require:true
 }, 
 doctor_id:{
    type:Schema.Types.ObjectId,
    ref:"User",
    
},

dateTime:{
    type:String,
    required:true, minlength:6
},
status:{
    type:String,
    enum:["pending", "confirmed", "cancelled", "completed", "paid"],
    default:"pending"
},
},{timestamps:true})

const Appointment= model("Appointment",appointmentSchema)

export default Appointment;