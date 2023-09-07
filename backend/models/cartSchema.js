import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
            min: 1,
            max: 10,
            required: true
        },
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export const Cart = mongoose.model("Cart", cartSchema);