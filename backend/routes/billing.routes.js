
import {Router} from "express"

const router=Router();
/*
 Billing Endpoints
For managing billing and payments.

Method	Endpoint	Description
POST	/billing	Generate a bill for an appointment.
GET	/billing	Retrieve all bills.
GET	/billing/:id	Retrieve details of a specific bill.
PUT	/billing/:id	Update billing status (paid/unpaid).
*/

router.post("/",generateABill)
router.get("/",retrieveAllBills)
router.get("/:id",RetrieveBillById)
router.put("/:id",updateBillById)



export default Router;