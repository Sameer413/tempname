import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product"
        }
    }],
    price: {
        type: Number,
        required: true,
    },
    address: {
        name: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number,
            required: true,
        },
        pincode: {
            type: Number,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        landmark: {
            type: String,
        }
    },
    price: {
        type: Number,
        required: true,
    }
});

export const Order = mongoose.model("Order", Schema);
