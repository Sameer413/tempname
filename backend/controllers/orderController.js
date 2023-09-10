import catchAsync from "../middleware/catchAsync.js"
import { Order } from "../models/orderSchema.js";
import { Product } from "../models/productSchema.js"
import { User } from "../models/userSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";


export const createOrder = catchAsync(async (req, res, next) => {
    const orderData = req.body;

    const order = await Order.create(orderData);

    await order.save();

    res.status(200).json({
        success: true,
        order
    })
});