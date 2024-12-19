import {Router} from "express"
import {
    scheduleAnAppointment,
    retrieveAllAppointments,
    retrieveAppointmentById,
    updateAppointmentById,
    deleteAppointmentById


} from "../controllers/appoinment.controllers.js"
const router=Router();
/*

 Appointment Management Endpoints
For scheduling and managing patient appointments.

Method	Endpoint	Description
POST	/appointments	Schedule a new appointment.
GET	/appointments	Retrieve all appointments.
GET	/appointments/:id	Retrieve details of a specific appointment.
PUT	/appointments/:id	Update appointment details (status, time).
DELETE	/appointments/:id	Cancel an appointment.
*/
router.post("/",scheduleAnAppointment)
router.get("/",retrieveAllAppointments)
router.get("/:id",retrieveAppointmentById)
router.put("/:id",updateAppointmentById)
router.delete("/:id",deleteAppointmentById)


export default Router;