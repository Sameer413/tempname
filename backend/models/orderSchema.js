import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    // products: [{
    //     product: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         required: true,
    //         ref: "Product"
    //     },
    //     quantity: {
    //         type: Number,
    //         required: true,
    //     },
    //     price: {
    //         type: Number,
    //         required: true,
    //     },
    // }],
    // totalPrice: {
    //     type: Number,
    //     required: true,
    // },
    address: {
        name: {
            type: String,
        },
        mobile: {
            type: Number,
        },
        pincode: {
            type: Number,
        },
        state: {
            type: String,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        landmark: {
            type: String,
        }
    },
    status: {
        type: String,
        default: "Processing",
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export const Order = mongoose.model("Order", Schema);
