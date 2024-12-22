import Staff from "../models/staff.model.js"

/*
_id: Unique identifier (MongoDB ObjectID).
name: Staff member's full name.
role: Enum (Admin, Nurse, Pharmacist, Doctor, etc.).
specialization: Applies only to doctors (e.g., Cardiologist, Orthopedic).
availability: Weekly schedule (array of time slots, applicable for doctors).
contact: Phone number and email.
shift: Morning, Evening, Night (for nurses or other staff).
experience: Years of experience (for doctors).
salary: Staff member's monthly salary (optional for tracking HR data).
*/
export async function addAStaff(req,res){
 const {fullName,role,email,specialization,availability,contact,experience,salary}=req.body;
 try {
    if(!fullName||!email||!role||!contact||!salary||!experience)return res.status(400).json({message:"All fields are required"})
    const existingStaff= await Staff.findOne({email});
   if (existingStaff)return res.status(400).json({message:"Staff Already Exist"})
    const staff=await Staff.create({
       fullName,
       email,
       role,
       contact,
       experience,
       specialization,
       availability,
       salary
    })

    return res.status(201).json(staff)
 } catch (error) {
    console.log(error.message+"error in addStaff controller")
    return res.status(500).json({message:"Internal Server Error"})
 }

 
}

export async function retrieveAllStaffs(req,res){
  try {
    const filter = {};
    if (req.query.role) filter.role = req.query.role;
    if (req.query.shift) filter.shift = req.query.shift;
    const AllStaff=await Staff.find({...filter});
    return res.status(200).json(AllStaff);
  } catch (error) {
    console.log(error.message+" error in retrieveAllStaffs controller")
    return res.status(500).json({message:"Internal Server Error"})
  }
}

export async function retrieveStaffById(req,res){
    const id=req.params.id;
    try {
        const staff=await Staff.findById(id)

        return res.status(200).json(staff);
      } catch (error) {
        console.log(error.message+" error in retrieveStaffById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}

export async function updateStaffById(req,res){
  const id=req.params.id;
  const {fullName,role,email,specialization,availability,contact,experience,salary}=req.body;
  try {
    const filter={};
    if(fullName)filter.fullName=fullName;
    if(role)filter.role=role;
    if(email)filter.email=email;
    if(specialization)filter.specialization=specialization;
    if(availability)filter.availability=availability;
    if(contact)filter.contact=contact;
    if(experience)filter.experience=experience;
    if(salary)filter.salary=salary;
  
    const staff=await Staff.findByIdAndUpdate(id,{$set:{...filter}},{new:true});
    return res.status(202).json(staff);
  } catch (error) {
    console.log(error.message," error in updateStaffById controller ");
    return res.status(500).json({message:"Internal Server Error"})
  }

}
export async function deleteStaffById(req,res){
  const id =req.params.id;

  try {
  const deletedStaff=await Staff.findByIdAndDelete(id);
  return res.status(200).json(deletedStaff)
    
  } catch (error) {
    console.log(error.message," error in updateStaffById controller ");
    return res.status(500).json({message:"Internal Server Error"});
  }
}

