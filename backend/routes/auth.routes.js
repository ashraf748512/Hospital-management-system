import {Router} from "express"
import {protectedRoute } from "../middlewares/validateToken.js"
import {
    signup,
    login,
    logout,
    forgotPassword,
    resetPassword,
    checkAuth,
    
} from "../controllers/auth.controllers.js"
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
router.get("/logout",protectedRoute,logout)
router.post("/forgot-password",protectedRoute,forgotPassword)
router.post("/reset-password",protectedRoute,resetPassword)
router.get("/check-authUser",protectedRoute,checkAuth)


export default router;