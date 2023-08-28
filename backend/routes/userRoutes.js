import express from "express";
import { createUser, login, logout } from "../controllers/userController.js";

const router = express.Router();

router.route('/register').post(createUser);
router.route('/login').post(login);
router.route('/logout').get(logout);

export default router;