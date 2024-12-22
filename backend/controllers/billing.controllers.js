import Billing from "../models/billing.model.js"

export async function generateABill(req,res){
    const {appointment_id,amount,status,payment_method}=req.body
    try {
        if(!appointment_id||!amount)return res.status(400).json({message:"All fields are required"})

            const billing=await Billing.create({
                appointment_id,
                amount,
                status,
                payment_method
            })
        
            return res.status(201).json(billing)
     } catch (error) {
       console.log(error," error in  generateABill controller")
       return res.status(500).json({message:"Internal Server Error"})
    
     }
}

export async function retrieveAllBills(req,res){
    const status=req.query.status;
    const payment_method=req.query.payment_method;
    try {
        const filter={};
        if(status)filter.status=status;
        if(payment_method)filter.payment_method=payment_method;
        const billings=await Billing.find({...filter})
    
        return res.status(201).json(billings)
 } catch (error) {
   console.log(error," error in retrieveAllBills controller")
   return res.status(500).json({message:"Internal Server Error"})

 }
}

export async function retrieveBillById(req,res){
    const id=req.params.id;
    try {
        const bill=await Billing.findById(id)

        return res.status(200).json(bill);
      } catch (error) {
        console.log(error.message+" error in retrieveBillById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}

export async function updateBillById(req,res){
    const id=req.params.id
    const {appointment_id,amount,status,payment_method}=req.body
    try {
        const filter={};
        if(appointment_id)filter.appointment_id=appointment_id;
        if(amount)filter.amount=amount;
        if(status)filter.status=status;
        if(payment_method)filter.payment_method=payment_method;
        
        
        const updatedBilling=await Billing.findByIdAndUpdate(id,{$set:{...filter}},{new:true})

        return res.status(200).json(updatedBilling);
      } catch (error) {
        console.log(error.message+" error in updateBillById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}

