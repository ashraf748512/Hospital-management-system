import Bed from "../models/bed.models.js"

export async  function addNewBed(req,res){
    const {room_number,ward_type,bed_number,status,patientId}=req.body
    try {
       if(!room_number||!ward_type||!bed_number||!status||!patientId)return res.status(400).json({message:"All fields are required"})
          
           const bed=await Bed.create({
              room_number,
              bed_number:`${room_number},${bed_number}`,
              ward_type,
              status,
              current_patient_id:patientId,
             
           })
       
           return res.status(201).json(bed)
    } catch (error) {
      console.log(error," error in addNewBed controller")
      return res.status(500).json({message:"Internal Server Error"})
   
    }
}

export async function retrieveAllBeds(req,res){
    try {

        const bed=await Bed.find({})
    
        return res.status(201).json(bed)
 } catch (error) {
   console.log(error," error in retrieveAllBeds controller")
   return res.status(500).json({message:"Internal Server Error"})

 }
}

export async function retrieveBedById(req,res){
    const id=req.params.id;
    try {
        const bed=await Bed.findById(id)

        return res.status(200).json(bed);
      } catch (error) {
        console.log(error.message+" error in retrieveBedById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}

export async function updateBedById(req,res){
    const id=req.params.id
    const {ward_type,status,patientId}=req.body
    try {
        const filter={};
        if(ward_type)filter.ward_type=ward_type;
        if(status)filter.status=status;
        if(patientId)filter.patientId=patientId;
       
        const bed=await Bed.findByIdAndUpdate(id,{$set:{...filter}},{new:true})

        return res.status(200).json(bed);
      } catch (error) {
        console.log(error.message+" error in updateBedById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}
export  async function removeBedById(req,res){
    const id =req.params.id;

    try {
    const deletedBed=await Bed.findByIdAndDelete(id);
    return res.status(200).json(deletedBed)
      
    } catch (error) {
      console.log(error.message," error in removeBedById controller ");
      return res.status(500).json({message:"Internal Server Error"});
    }
}
