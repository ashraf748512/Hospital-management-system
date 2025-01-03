import {Schema,model} from "mongoose"
/*
Billing Collection:

_id: Unique identifier.
appointment_id: Reference to the Appointment Collection.
amount: Total bill amount.
status: Enum (Paid, Unpaid).
payment_method: Enum (Cash, Card, UPI, etc.).
const {appointment_id,amount,status,payment_method}=req.body

*/
const billingSchema=new Schema({
appointment_id:{
        type:Schema.Types.ObjectId,
        ref:"Appoinment"
    },
    amount:{
        type:Number,
        required:"true"
    },
    status:{
        type:String,
        enum:["Paid","Unpaid"],
        default:"Unpaid"
    },
    payment_method:{
        type:String,
        enum:["Cash","Card","UPI"],
        default:"Cash"
    }

},{timestamps:true})

const Billing=model("Billing",billingSchema);

export default Billing;