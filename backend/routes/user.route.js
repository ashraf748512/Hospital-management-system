import {Router} from "express"

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
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.post("/forget-password",forgetPassword)
router.post("/reset-password",forgetPassword)
router.delete("/:id",deleteUserById)
router.get("/:id",RetrieveUsersById)
router.put("/:id",updateUsersById)
router.get("/",RetrieveAllUsers)

export default Router;