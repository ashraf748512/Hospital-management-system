import Inventory from "../models/inventory.model.js"

export async function addAnInventory(req,res){
    const {item_name,quantity,threshold,expiry_date,category}=req.body
    try {
        if(!item_name||!quantity||!threshold||!expiry_date||!category)return res.status(400).json({message:"All fields are required"})
            const existingInventory= await Inventory.findOne({item_name});
           if (existingInventory)return res.status(400).json({message:"Patient Already Exist"})
            const inventory=await Inventory.create({
                item_name,
                quantity,
                threshold,
                expiry_date,
                category
            })
        
            return res.status(201).json(inventory)
     } catch (error) {
       console.log(error," error in  addAnInventory controller")
       return res.status(500).json({message:"Internal Server Error"})
    
     }
}

export async function retrieveAllInventories(req,res){
    const category=req.query.category;
    const expiry_date=req.query.expiry_date;
    try {
        const filter={};
        if(expiry_date)filter.expiry_date=expiry_date;
        if(category)filter.category=category;
        const inventories=await Inventory.find({...filter})
    
        return res.status(201).json(inventories)
 } catch (error) {
   console.log(error," error in retrieveAllInventories controller")
   return res.status(500).json({message:"Internal Server Error"})

 }
}

export async function retrieveAnInventoryById(req,res){
    const id=req.params.id;
    try {
        const inventory=await Inventory.findById(id)

        return res.status(200).json(inventory);
      } catch (error) {
        console.log(error.message+" error in retrieveAnInventoryById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}

export async function updateAnInventoryById(req,res){
    const id=req.params.id
    const {item_name,quantity,threshold,expiry_date,category}=req.body
    try {
        const filter={};
        if(item_name)filter.item_name=item_name;
        if(quantity)filter.quantity=quantity;
        if(threshold)filter.threshold=threshold;
        if(expiry_date)filter.expiry_date=expiry_date;
        if(category)filter.category=category;
        
        const updatedInventory=await Inventory.findByIdAndUpdate(id,{$set:{...filter}},{new:true})

        return res.status(200).json(updatedInventory);
      } catch (error) {
        console.log(error.message+" error in updateAnInventoryById controller")
        return res.status(500).json({message:"Internal Server Error"})
      }
}
export async function removeAnInventoryById(req,res){
    const id =req.params.id;

    try {
    const deletedInventory=await Inventory.findByIdAndDelete(id);
    return res.status(200).json(deletedInventory)
      
    } catch (error) {
      console.log(error.message," error in removeAnInventoryById controller ");
      return res.status(500).json({message:"Internal Server Error"});
    }
}
