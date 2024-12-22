import {Schema,model} from "mongoose";
/*
Admission Collection:

_id: Unique identifier.
patient_id: Reference to the Patient Collection.
bed_id: Reference to the Bed Management Collection.
admission_date: Date and time of admission.
discharge_date: Nullable, updated on discharge.
doctor_id: Reference to the Staff Collection (ObjectID with role Doctor).
 const {patient_id,bed_id,admission_date,discharge_date,doctor_id}=req.body
*/


const addmissionSchema=new Schema({
    patient_id:{
        type:Schema.Types.ObjectId,
        ref:"Patient"
    },
    bed_id:{
        type:Schema.Types.ObjectId,
        ref:"Bed"
    },
    admission_date:{
        type:String,
        require:true
    }, 
    discharge_date:{
        type:String,
        default:""
       
    },
    doctor_id:{
        type:Schema.Types.ObjectId,
        ref:"Staff"
    },
   
},{timestamps:true})

const Admission= model("Admission",addmissionSchema)

export default Admission;