import dotenv from "dotenv"
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import {protectedRoute} from "./middlewares/validateToken.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import staffRoutes from "./routes/staff.routes.js"
import patientRoutes from "./routes/patient.routes.js"
import inventoryRoutes from "./routes/inventory.routes.js"
import billingRoutes from "./routes/billing.routes.js"
import appointmentRoutes from "./routes/appointment.routes.js"
import addmissionRoutes from "./routes/addmission.routes.js"
import bedRoutes from "./routes/bed.routes.js"

import {connectDB} from "./lib/mongoDbConnection.js"
 
const app =express();
const PORT=8000;
app.get('/',(req,res)=>res.send("hello I am here"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use("/auth",authRoutes)
app.use("/user",protectedRoute,userRoutes);
app.use("/patient",patientRoutes);
app.use("/billing",billingRoutes);
app.use("/staff",staffRoutes);
app.use("/inventory",inventoryRoutes);
app.use("/bed",bedRoutes);
app.use("/appointment",appointmentRoutes);
app.use("/addmission",addmissionRoutes);
app.listen(PORT,()=>{
    connectDB();
    console.log("app is listing on Port : "+PORT)}
)