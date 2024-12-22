import Patient from "../models/patient.model.js"

export async function addAPatient(req,res){
 const {fullName,dob,gender,address,medicalHistory,age,contact}=req.body
 try {
    if(!fullName||!dob||!gender||!address||!medicalHistory||!age||!contact)return res.status(400).json({message:"All fields are required"})
        const existingPatient= await Patient.findOne({contact});
       if (existingPatient)return res.status(400).json({message:"Patient Already Exist"})
        const patient=await Patient.create({
           fullName,
           dob,
           gender,
           contact,
           age,
           address,
           medicalHistory,
        })
    
        return res.status(201).json(patient)
 } catch (error) {
   console.log(error," error in addAPatient controller")
   return res.status(500).json({message:"Internal Server Error"})

 }
}
export async function retrieveAllPatients(req,res){
    try {

            const patients=await Patient.find({})
        
            return res.status(201).json(patients)
     } catch (error) {
       console.log(error," error in retrieveAllPatients controller")
       return res.status(500).json({message:"Internal Server Error"})
    
     }
}
export async function retrievePatientById(req,res){
    const id=req.params.id;
    try {
        const patient=await Patient.findById(id)

        return res.status(200).json(patient);
      } catch (error) {
        console.log(error.message+" error in retrievePatientById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}
export async function updatePatientById(req,res){
    const id=req.params.id
    const {fullName,dob,gender,address,medicalHistory,age,contact}=req.body
    try {
        const filter={};
        if(fullName)filter.fullName=fullName;
        if(dob)filter.dob=dob;
        if(gender)filter.gender=gender;
        if(address)filter.address=address;
        if(medicalHistory)filter.medicalHistory=medicalHistory;
        if(age)filter.age=age;
        if(contact)filter.contact=contact;
        const patient=await Patient.findByIdAndUpdate(id,{$set:{...filter}},{new:true})

        return res.status(200).json(patient);
      } catch (error) {
        console.log(error.message+" error in updatePatientById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}
export async function deletePatientById(req,res){
    const id =req.params.id;

    try {
    const deletedPatient=await Patient.findByIdAndDelete(id);
    return res.status(200).json(deletedPatient)
      
    } catch (error) {
      console.log(error.message," error in deletePatientById controller ");
      return res.status(500).json({message:"Internal Server Error"});
    }
}
