import User from "../models/user.model.js"


export async function retrieveAllUsers(req,res){
    try {
       const users=await User.find(); 
    const safeUsers=users.map((user)=>({
        _id:user._id,
        fullName:user.fullName,
        email:user.email,
        role:user.role
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
         role:user.role
     }
        return res.status(200).json(safeUser)
     } catch (error) {
         console.log(error.message +" Error in retrieveUserById controller")
         return res.status(500).json({message:"Internal server error"})
     }
}

export async function updateUserById(req,res){
    const role=req.query.role
    const id=req.params.id;
    try {
        const user=await User.findByIdAndUpdate(id,{$set:{role:role}},{ new: true }); 
     const safeUser={
         _id:user._id,
         fullName:user.fullName,
         email:user.email,
         role:user.role
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
         role:user.role
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

