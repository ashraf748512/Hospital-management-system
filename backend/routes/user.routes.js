import {Router} from "express"
import {
    
    retrieveAllUsers,
    retrieveUserById,
    updateUserById,
    deleteUserById
} from "../controllers/user.controllers.js"

const router=Router();
/*
2. User Management Endpoints
For managing users (patients, staff, admins).

Method	Endpoint	Description
GET	/users	Retrieve all users (admin-only).
GET	/users/:id	Retrieve details of a specific user.
PUT	/users/:id	Update user details (name, role, etc.).
DELETE	/users/:id	Deactivate or delete a user account.
*/

router.delete("/:id",deleteUserById)
router.get("/:id",retrieveUserById)
router.put("/:id",updateUserById)
router.get("/",retrieveAllUsers)

export default router;