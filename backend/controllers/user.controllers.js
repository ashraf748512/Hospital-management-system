import User from "../models/user.model.js"


export async function retrieveAllUsers(req,res){
    try {
       const users=await User.find(); 
    const safeUsers=users.map((user)=>({
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        role:user.role,
        gender:user.gender,
        address:user.address,
        birthday:user.birthday,
        phone:user.phone
    }))
       return res.status(200).json(safeUsers)
    } catch (error) {
        console.log(error.message +" Error in retrieveAllUsers controller")
        return res.status(500).json({message:"Internal server error"})
    }

}

export async function retrieveUserById(req,res){
    const id=req.params.id;
    try {
        const user=await User.findById(id); 
     const safeUser={
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        role:user.role,
        gender:user.gender,
        address:user.address,
        birthday:user.birthday,
        phone:user.phone
     }
        return res.status(200).json(safeUser)
     } catch (error) {
         console.log(error.message +" Error in retrieveUserById controller")
         return res.status(500).json({message:"Internal server error"})
     }
}

export async function updateUserById(req,res){
    const {fullName,email,profilePic,phone,address,gender,birthday}=req.body
    // const role=req.query.role
    const id=req.params.id;
    try {
        const filter={};
            if(fullName)filter.fullName=fullName
            if(profilePic)filter.profile_pic=profilePic
            if(email)filter.email=email
            if(phone)filter.phone=phone
            if(address)filter.address=address
            if(gender)filter.gender=gender
            if(birthday)filter.birthday=birthday
        const user=await User.findByIdAndUpdate(id,{$set:{...filter}},{ new: true }); 
        const safeUser={
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            role:user.role,
            profilePic:user.profilePic,
            phone:user.phone,
            address:user.address,
            gender:user.gender,
            birthday:user.birthday
     }
        return res.status(200).json(safeUser)
     } catch (error) {
         console.log(error.message +" Error in findByIdAndUpdate controller")
         return res.status(500).json({message:"Internal server error"})
     }

}
export async function deleteUserById(req,res){
    
    const id=req.params.id;
    try {
        const user=await User.findByIdAndDelete(id); 
     const safeUser={
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        role:user.role,
        gender:user.gender,
        address:user.address,
        birthday:user.birthday,
        phone:user.phone
     }
        
        res.cookie("jwt","",{
            maxAge:0
          })
          return res.status(200).json(safeUser)
     } catch (error) {
         console.log(error.message +" Error in deleteUserById controller")
         return res.status(500).json({message:"Internal server error"})
     }
}

