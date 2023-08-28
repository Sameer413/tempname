import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler.js";
import catchAsync from "./catchAsync.js";
import { User } from "../models/userSchema.js";


export const isAuthenticated = catchAsync(async (req, res, next) => {
    // Taking token from cookies
    const { token } = req.cookies;

    if (!token) {
        return next(new ErrorHandler("Not Logged In", 401));
    }

    // Decoding the token and matching with the Secret key, It will give user's _id.
    const DecodedData = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(DecodedData.id);

    next();
});

export const isAdmin = catchAsync(async (req, res, next) => {
    if (req.user.role === "user") {
        return next(
            new ErrorHandler(
                `${req.user.role} is not allowed to access this resource`, 403
            )
        );
    }

    next();
});
