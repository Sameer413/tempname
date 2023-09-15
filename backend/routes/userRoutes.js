import express from "express";
import { changePassword, createUser, isAuth, login, logout, updateUser, user } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route('/').get(isAuthenticated, isAuth)
router.route('/me').get(isAuthenticated, user)
router.route('/register').post(createUser);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/me/update').put(isAuthenticated, updateUser)
router.route('/me/update/password').put(isAuthenticated, changePassword)

export default router;