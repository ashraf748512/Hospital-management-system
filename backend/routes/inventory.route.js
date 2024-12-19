import {Router} from "express"

import {
    addAnInventory,
    retrieveAllInventories,
    retrieveAnInventoryById,
    updateAnInventoryById,
    removeAnInventoryById
} from "../controllers/inventory.controllers.js"


const router=Router();
/* Inventory Management Endpoints
For tracking and managing inventory (medicines, equipment).

Method	Endpoint	Description
POST	/inventory	Add a new inventory item.
GET	/inventory	Retrieve all inventory items.
GET	/inventory/:id	Retrieve details of a specific item.
PUT	/inventory/:id	Update inventory item details.
DELETE	/inventory/:id	Remove an inventory item.
*/
router.post("/",addAnInventory)
router.get("/",retrieveAllInventories)
router.get("/:id",retrieveAnInventoryById)
router.put("/:id",updateAnInventoryById)
router.delete("/:id",removeAnInventoryById)


export default Router;