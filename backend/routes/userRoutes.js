import express from "express";
import { createUser, isAuth, login, logout, user } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route('/').get(isAuthenticated, isAuth)
router.route('/me').get(isAuthenticated, user)
router.route('/register').post(createUser);
router.route('/login').post(login);
router.route('/logout').get(logout);

export default router;