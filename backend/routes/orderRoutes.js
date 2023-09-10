import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createOrder } from "../controllers/orderController.js";

const router = express.Router();

router.route("/order/create").post(isAuthenticated, createOrder)

export default router;