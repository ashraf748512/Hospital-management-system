import {Schema,model} from "mongoose";
/*
Attributes:

_id: Unique identifier.
room_number:room identifier
bed_number: Unique bed identifier.
ward_type: Enum (ICU, General, Private).
status: Enum (Occupied, Available).
current_patient_id: Nullable, reference to the Patient Collection when occupied.
*/
const bedSchema=new Schema({

    current_patient_id:{
    type:Schema.Types.ObjectId,
    ref:"Patient"
    },
    room_number:{
        type:String,
        require:true
    }, 
    ward_type:{
        type:String,
        enum:["ICU","General","Private"],

    },
    bed_number:{
        type:String,
        unique:true,
        require:true
    },
    status:{
        type:String,
        enum:["Occupied","Available"],

    },
    
},{timestamps:true})

const Bed= model("Bed",bedSchema)

export default Bed;