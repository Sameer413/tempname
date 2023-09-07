import catchAsync from "../middleware/catchAsync.js"
import { Product } from "../models/productSchema.js"
import { User } from "../models/userSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const adminProducts = catchAsync(async (req, res, next) => {
    const products = await Product.find({ user: req.user._id });

    if (!products) {
        return next(new ErrorHandler("No Products Found", 404));
    }

    res.status(200).json({
        success: true,
        products
    })
});

export const users = catchAsync(async (req, res, next) => {
    const users = await User.find({});

    if (!users) {
        return next(new ErrorHandler("No Users Found", 404));
    }

    res.status(200).json({
        success: true,
        users
    })
});

export const updateRole = catchAsync(async (req, res, next) => {
    const { role, user } = req.body;

    if (!role || !user) {
        return next(new ErrorHandler("User not found to assign role", 404));
    }

    const users = await User.findById(user)

    await users.updateOne({
        role: role
    })

    await users.save();

    res.status(200).json({
        success: true,
        message: "Role Updated successfully"
    })
})