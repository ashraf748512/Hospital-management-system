
import {Router} from "express"
import {
    addNewBed,
    retrieveAllBeds,
    retrieveBedById,
    updateBedById,
    removeById

} from "../controllers/bed.controllers.js"
const router=Router();
/*
9. Bed Management Endpoints
For tracking bed availability and assignments.

Method	Endpoint	Description
POST	/beds	Add a new bed.
GET	/beds	Retrieve all beds (available/occupied).
GET	/beds/:id	Retrieve details of a specific bed.
PUT	/beds/:id	Update bed status (assign to a patient).
DELETE	/beds/:id	Remove a bed record.

*/
router.post("/",addNewBed)
router.get("/",retrieveAllBeds)
router.get("/:id",retrieveBedById)
router.put("/:id",updateBedById)
router.delete("/:id",removeById)


export default Router;