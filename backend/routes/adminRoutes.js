import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/auth.js";
import { adminProducts, updateRole, users } from "../controllers/AdminController.js";

const router = express.Router();

router.route("/admin/products").get(isAuthenticated, adminProducts);
router.route("/admin/users").get(isAuthenticated, users);
router.route("/admin/users/role").put(isAuthenticated, isAdmin, updateRole);

export default router;