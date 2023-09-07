import express from "express";
import { deleteCartProductController, getAllCartProducts, newCartProduct, updateCartProductQuantity } from "../controllers/cartController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/cart").get(isAuthenticated, getAllCartProducts)
router.route("/cart/new/:_id").post(isAuthenticated, newCartProduct)
router.route("/cart/update/:_id").put(isAuthenticated, updateCartProductQuantity)
router.route("/cart/delete/:_id").delete(isAuthenticated, deleteCartProductController)

export default router;