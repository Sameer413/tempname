import catchAsync from "../middleware/catchAsync.js"
import { Product } from "../models/productSchema.js"
import { User } from "../models/userSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const getAllProducts = catchAsync(async (req, res, next) => {
    const products = await Product.find({});

    if (!products)
        return next(new ErrorHandler("Products not found", 400));

    res.status(200).json({
        success: true,
        products,
    });
});

export const createProduct = catchAsync(async (req, res, next) => {
    const { name, description, price, category } = req.body;

    if (!name || !description || !price || !category) {
        return next(new ErrorHandler("Enter all fields", 400));
    }

    const product = await Product.create({
        name,
        description,
        category,
        price,
        user: req.user._id
    })

    res.status(200).json({
        success: true,
        product
    });
});

export const productDetails = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params._id);

    if (!product) return next(new ErrorHandler("Product not found", 404));

    res.status(201).json({
        success: true,
        product
    });
});

export const deleteProduct = catchAsync(async (req, res, next) => {
    const product = await Product.findById(req.params._id);

    if (!product) return next(new ErrorHandler("Product not found", 404));

    await product.deleteOne();

    res.status(200).json({
        success: true,
        messaage: "Product Deleted Successfully!"
    });
});

export const updateProduct = catchAsync(async (req, res, next) => {
    const product = req.params._id;
    const updateFields = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(product, updateFields, {
            new: true,
            runValidators: true,
        });

        if (!updatedProduct) {
            return next(new ErrorHandler("Product not found", 404));
        }

        res.status(200).json({
            success: true,
            messaage: "Product updated Successfully"
        });
    } catch (error) {
        next(error);
    }
});