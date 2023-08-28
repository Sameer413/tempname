import express from "express";
import { createProduct, deleteProduct, getAllProducts, productDetails, updateProduct } from "../controllers/productController.js";
import { isAdmin, isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.route("/product/new").post(isAuthenticated, isAdmin, createProduct);

router.route("/products").get(getAllProducts);

router.route("/product/:_id")
    .get(productDetails)
    .put(isAuthenticated, isAdmin, updateProduct)
    .delete(isAuthenticated, isAdmin, deleteProduct);

export default router;