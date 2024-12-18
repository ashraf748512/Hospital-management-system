import {Router} from "express"

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
router.post("/",ScheduleAnAppointment)
router.get("/",retrieveAllAppointments)
router.get("/:id",RetrieveAppointmentById)
router.put("/:id",updateAppointmentById)
router.delete("/:id",deleteAppointmentById)


export default Router;