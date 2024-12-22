import {Schema,model} from "mongoose";
/*

_id: Unique identifier.
item_name: Medicine or equipment name.
quantity: Number of items available.
threshold: Minimum quantity for alerts.
category: Enum (Medicine, Equipment)
expiry_date: Expiration date for perishable items.
const {item_name,quantity,threshold,expiry_date,category}=req.body
*/
const inventorySchema=new Schema({
  item_name:{
    type:String,
    required:true
 }, 
 quantity:{
    type:Number,
    required:true
},

threshold:{
    type:Number,
},
expiry_date:{
    type:String,
    required:true
},
category:{
    type:String,
    enum:["Medicine","Equipment"]
}
},{timestamps:true})

const Inventory= model("Inventory",inventorySchema)

export default Inventory;