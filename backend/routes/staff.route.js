import {Router} from "express"

const router=Router();
/*
4. Staff Management Endpoints
For managing staff (doctors, nurses, pharmacists).

Method	Endpoint	Description
POST	/staff	Add a new staff member (admin-only).
GET	/staff	Retrieve a list of all staff members.
GET	/staff/:id	Retrieve details of a specific staff member.
PUT	/staff/:id	Update staff details (e.g., shift, role).
DELETE	/staff/:id	Remove a staff member.
*/
router.post("/",addAStaff)
router.get("/",retrieveAllStaffs)
router.get("/:id",RetrieveStaffById)
router.put("/:id",updateStaffById)
router.delete("/:id",deleteStaffById)


export default Router;
