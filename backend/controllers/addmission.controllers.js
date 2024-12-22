import Addmission from "../models/addmission.model.js"

export async function MakeAnAdmission(req,res){
    const {patient_id,bed_id,admission_date,discharge_date,doctor_id}=req.body
    try {
        if(!patient_id||!bed_id||!admission_date||!doctor_id)return res.status(400).json({message:"All fields are required"})
           
            const newAddmission=await Addmission.create({
                patient_id,
                bed_id,
                admission_date,
                discharge_date,
                doctor_id
            })
        
            return res.status(201).json(newAddmission)
     } catch (error) {
       console.log(error," error in MakeAnAdmission controller")
       return res.status(500).json({message:"Internal Server Error"})
    
     }
}

export async function retrieveAllActiveAdmission(req,res){
    const addmision_date=req.query.addmision_date;
    try {
     const filter={};
     if(addmision_date)filter.addmision_date=addmision_date;
        const addmissions=await Addmission.find({...filter})
    
        return res.status(201).json(addmissions)
 } catch (error) {
   console.log(error," error in retrieveAllActiveAdmission controller")
   return res.status(500).json({message:"Internal Server Error"})

 }
}

export async function retrieveAdmissionById(req,res){
    const id=req.params.id;
    try {
        const addmission=await Addmission.findById(id)

        return res.status(200).json(addmission);
      } catch (error) {
        console.log(error.message+" error in retrieveAdmissionById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}

export async function updateAdmissionDetailsById(req,res){
    const id=req.params.id
    const {discharge_date,bed_id}=req.body
    try {
        const filter={};
        if(discharge_date)filter.discharge_date=discharge_date;
        if(bed_id)filter.bed_id=bed_id;
        
        const updatedAddmission=await Addmission.findByIdAndUpdate(id,{$set:{...filter}},{new:true})

        return res.status(200).json(updatedAddmission);
      } catch (error) {
        console.log(error.message+" error in updateAdmissionDetailsById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}
