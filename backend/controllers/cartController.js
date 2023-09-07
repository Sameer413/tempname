import catchAsync from "../middleware/catchAsync.js";
import { Cart } from "../models/cartSchema.js";
import { Product } from "../models/productSchema.js";
import ErrorHandler from "../utils/ErrorHandler.js";

// params

export const newCartProduct = catchAsync(async (req, res, next) => {

    // Checking if Cart available for the given user
    let cart = await Cart.findOne({ user: req.user._id });

    // Creating the Cart for the given user if not 
    if (!cart) {
        cart = await Cart.create({ user: req.user._id, products: [] });
    }

    // Checking if product already exists or not 

    const existingProduct = await cart.products.find(item => item.product.toString() === req.params._id);

    // 1. If Product already exists then doing nothing
    // 2.Adding product to the cart's product object
    if (existingProduct) {
        return next(new ErrorHandler("Product Already added", 200));
    } else {
        cart.products.push({ product: req.params._id });
    }
    await cart.save();

    res.status(200).json({
        cart,
    });
});

export const updateCartProductQuantity = catchAsync(async (req, res, next) => {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        return next(new ErrorHandler("Cart is Empty", 400));
    }

    const existingProductIndex = await cart.products.findIndex(item => item.product.toString() === req.params._id);

    if (existingProductIndex === -1) {
        return next(new ErrorHandler("Product not found in the cart", 404))
    }

    const newQuantity = req.body.qty;
    if (isNaN(newQuantity) || !Number.isInteger(newQuantity)) {
        return next(new ErrorHandler("Invalid quantity value", 400));
    }
    // We Optimize the below solution soon
    if (existingProductIndex >= 0) {
        if (cart.products[existingProductIndex].quantity === 1 && newQuantity === -1) {
            deleteCartProduct(cart, existingProductIndex);
        }
        cart.products[existingProductIndex].quantity = cart.products[existingProductIndex].quantity + newQuantity;
        await cart.save();
    }

    res.status(200).json({
        success: true,
    });
});

const deleteCartProduct = async (cart, index) => {
    cart.products.splice(index, 1);
    await cart.save();
    return;
}

// Need to test more things after adding multiple products
export const deleteCartProductController = catchAsync(async (req, res, next) => {

    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        return next(new ErrorHandler("Cart is Empty", 400));
    }

    const existingProductIndex = await cart.products.findIndex(item => item.product.toString() === req.params._id);
    console.log(existingProductIndex);

    if (existingProductIndex === -1) {
        return next(new ErrorHandler("product not found", 404))
    }

    if (existingProductIndex >= 0) {
        deleteCartProduct(cart, existingProductIndex);
    }

    res.status(200).json({
        success: true,
    });

});

export const getAllCartProducts = catchAsync(async (req, res, next) => {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
        return next(new ErrorHandler("Cart is Empty", 400));
    }

    // const productIds = await cart.products.map(product => product.product);
    const productIdsWithQuantity = await cart.products.map(product => ({
        product: product.product,
        quantity: product.quantity
    }));

    // const products = await Product.find({ _id: { $in: productIds } });
    const products = await Promise.all(
        productIdsWithQuantity.map(async (item) => {
            const product = await Product.findById(item.product);
            return {
                ...item,
                name: product.name,
                price: product.price,
            }
        })
    )
    let totalPrice = 0;

    products.forEach(product => {
        const cartProduct = cart.products.find(cartProduct => cartProduct.product && cartProduct.product.toString() === product.product.toString());
        if (cartProduct) {
            totalPrice += product.price * cartProduct.quantity;
        }
    });

    res.status(200).json({
        products,
        totalPrice
    });

});


// const cart = await Cart.findOne({ user: req.user._id });

//     if (!cart) {
//         return next(new ErrorHandler("Cart is Empty", 400));
//     }

//     const productIdsWithQuantity = cart.products.map(product => ({
//         product: product.product,
//         quantity: product.quantity
//     }));

//     const productsWithDetails = await Promise.all(
//         productIdsWithQuantity.map(async (item) => {
//             const product = await Product.findById(item.product);
//             return {
//                 ...item,
//                 name: product.name,
//                 price: product.price
//             };
//         })
//     );

//     let totalPrice = 0;

//     productsWithDetails.forEach(item => {
//         totalPrice += item.price * item.quantity;
//     });

//     res.status(200).json({
//         products: productsWithDetails,
//         totalPrice
//     });