import {Router} from "express"
import {
    MakeAnAdmission,
    retrieveAllActiveAdmission,
    retrieveAdmissionById,
    updateAdmissionDetailsById

} from "../controllers/addmission.controllers.js"
const router=Router();
/*
8. Admission Management Endpoints
For handling patient admissions and discharges.

Method	Endpoint	Description
POST	/admissions	Admit a patient.
GET	/admissions	Retrieve all active admissions.
GET	/admissions/:id	Retrieve details of a specific admission.
PUT	/admissions/:id	Update admission details (discharge date).
*/
router.post("/",MakeAnAdmission)
router.get("/",retrieveAllActiveAdmission)
router.get("/:id",retrieveAdmissionById)
router.put("/:id",updateAdmissionDetailsById)



export default Router;