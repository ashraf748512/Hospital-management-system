import Appoinment from "../models/appointment.model.js"

export async function scheduleAnAppointment(req,res){
    const {patient_id,doctor_id,dateTime,status}=req.body
    try {
        if(!patient_id||!doctor_id||!dateTime||!status)return res.status(400).json({message:"All fields are required"})
        
            const appointment=await Appoinment.create({
                patient_id,
                doctor_id,
                dateTime,
                status
            })
        
            return res.status(201).json(appointment)
     } catch (error) {
       console.log(error," error in scheduleAnAppointment controller")
       return res.status(500).json({message:"Internal Server Error"})
    
     }
}

export async function retrieveAllAppointments(req,res){
    const status=req.query.status;
    const dateTime=req.query.dateTime;
    const patient_id=req.query.patient_id;
    const doctor_id=req.query.doctor_id;
    try {
        const filter={};
        if(status)filter.status=status;
        if(dateTime)filter.dateTime=dateTime;
        if(patient_id)filter.patient_id=patient_id;
        if(doctor_id)filter.doctor_id=doctor_id;
            const appointment=await Appoinment.find({...filter})
        
            return res.status(201).json(appointment)
     } catch (error) {
       console.log(error," error in retrieveAllAppointments controller")
       return res.status(500).json({message:"Internal Server Error"})
    
     }
}

export async function retrieveAppointmentById(req,res){
    const id=req.params.id;
    try {
        const appointment=await Appoinment.findById(id)
     if(!appointment)return res.status(400).json({message:"No Appoinment Found"})
        return res.status(200).json(appointment);
      } catch (error) {
        console.log(error.message+" error in retrieveAppointmentById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}

export async function updateAppointmentById(req,res){
    const id=req.params.id
    const {dateTime,status}=req.body
    try {
        const filter={};
        if(dateTime)filter.dateTime=dateTime;
        if(status)filter.status=status;
        
        const updatedAppointment=await Appoinment.findByIdAndUpdate(id,{$set:{...filter}},{new:true})

        return res.status(200).json(updatedAppointment);
      } catch (error) {
        console.log(error.message+" error in updateAppointmentById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
} 
export async function deleteAppointmentById(req,res){
    const id =req.params.id;

    try {
    const deletedAppoinment=await Appoinment.findByIdAndDelete(id);
    return res.status(200).json(deletedAppoinment)
      
    } catch (error) {
      console.log(error.message," error in deleteAppointmentById controller ");
      return res.status(500).json({message:"Internal Server Error"});
    }
}

