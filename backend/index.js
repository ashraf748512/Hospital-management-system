import express from "express";
import userRoute from "./routes/user.route.js"
import staffRoute from "./routes/staff.route.js"
import patientRoute from "./routes/patient.route.js"
import inventoryRoute from "./routes/inventory.route.js"
import billingRoute from "./routes/billing.route.js"
import appointmentRoute from "./routes/appointment.routes.js"
import addmissionRoute from "./routes/addmission.route.js"
import bedRoute from "./routes/bed.routes.js"
const app =express();
const PORT=8000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user",userRoute);
app.use("/patient",patientRoute);
app.use("/billling",billingRoute);
app.use("/staff",staffRoute);
app.use("/inventory",inventoryRoute);
app.use("/bed",bedRoute);
app.use("/appointment",appointmentRoute);
app.use("/addmission",addmissionRoute);
app.listen(PORT,()=>console.log("app is listing on Port : "+PORT))