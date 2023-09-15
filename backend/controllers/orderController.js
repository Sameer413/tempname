import catchAsync from "../middleware/catchAsync.js"
import { Order } from "../models/orderSchema.js";
import { Product } from "../models/productSchema.js"
import { User } from "../models/userSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";


export const createOrder = catchAsync(async (req, res, next) => {
    const orderData = req.body;
    orderData.user = req.user._id;

    if (!orderData) {
        return next(new ErrorHandler("Enter all fields", 400));
    }
    const order = await Order.create(orderData);

    await order.save();

    res.status(200).json({
        success: true,
        order
    })
});

export const adminOrders = catchAsync(async (req, res, next) => {

    const orders = await Order.find({}).populate([
        {
            path: 'products.product', // Specify the field that references the Product schema
            model: 'Product', // Specify the model to use for populating (should match the model name)
        },
        {
            path: 'user', // Specify the field that references the User schema
            model: 'User', // Specify the model to use for populating (should match the model name)
        },
    ]);

    if (!orders) {
        return next(new ErrorHandler("No Orders found", 404));
    }

    const orderDetails = orders.map(order => ({
        products: order.products.map(productItem => ({
            product: productItem.product,
            quantity: productItem.quantity,
        })),
        id: order._id,
        user: order.user,
        totalPrice: order.totalPrice,
        status: order.status
        // Include other fields from the Order schema as needed
    }));

    res.status(200).json({
        success: true,
        orderDetails
    });
});


export const userOrder = catchAsync(async (req, res, next) => {
    const userId = req.user.id;

    const orders = await Order.find({ user: req.user._id }).populate([
        {
            path: 'products.product', // Specify the field that references the Product schema
            model: 'Product', // Specify the model to use for populating (should match the model name)
        },
        {
            path: 'user', // Specify the field that references the User schema
            model: 'User', // Specify the model to use for populating (should match the model name)
        },
    ]);

    if (!orders) {
        return next(new ErrorHandler("No Orders found", 404));
    }

    const orderDetails = orders.map(order => ({
        products: order.products.map(productItem => ({
            product: productItem.product,
            quantity: productItem.quantity,
        })),
        id: order._id,
        user: order.user,
        totalPrice: order.totalPrice,
        status: order.status
        // Include other fields from the Order schema as needed
    }));

    res.status(200).json({
        success: true,
        orderDetails
    });
});

export const updateStatus = catchAsync(async (req, res, next) => {
    try {
        const orderId = req.params.orderId;
        const newStatus = req.body.status; // Assuming you send the new status in the request body

        // Update the status of the order document
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { status: newStatus },
            { new: true } // To return the updated order document
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: 'Order not found' });
        }

        res.status(200).json({ success: true, updatedOrder });
    } catch (error) {
        next(error);
    }
})