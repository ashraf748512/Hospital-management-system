import {Router} from "express"
import {

    addAPatient,
    retrieveAllPatients,
    retrievePatientById,
    updatePatientById,
    deletePatientById

} from "../controllers/patient.controllers.js"
const router=Router();
/*

3. Patient Management Endpoints
For CRUD operations on patient data.

Method	Endpoint	Description
POST	/patients	Add a new patient.
GET	/patients	Retrieve a list of all patients.
GET	/patients/:id	Retrieve details of a specific patient.
PUT	/patients/:id	Update patient details.
DELETE	/patients/:id	Delete a patient record.
*/
router.post("/",addAPatient)
router.get("/",retrieveAllPatients)
router.get("/:id",retrievePatientById)
router.put("/:id",updatePatientById)
router.delete("/:id",deletePatientById)


export default router;