import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/auth.js";
import { adminOrders, createOrder, updateStatus, userOrder } from "../controllers/orderController.js";

const router = express.Router();

router.route("/order/create").post(isAuthenticated, createOrder)
router.route("/orders").get(isAuthenticated, isAdmin, adminOrders)
router.route("/order/:orderId").put(isAuthenticated, isAdmin, updateStatus)
router.route("/me/orders").get(isAuthenticated, userOrder);

export default router;