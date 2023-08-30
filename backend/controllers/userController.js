import { User } from "../models/userSchema.js";
import catchAsync from "../middleware/catchAsync.js"
import ErrorHandler from "../utils/ErrorHandler.js"
import bcrypt from "bcrypt"
import sendToken from "../utils/sendToken.js"

export const createUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Enter all fields!", 400));
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser)
            return next(new ErrorHandler("User Already Exists!", 409));

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            firstName: "user",
            lastName: "user",
            email,
            password: hashedPassword,
        });

        // res.status(201).json({
        //     newUser
        // });
        sendToken(res, newUser, `Welcome ${newUser.firstName + " " + newUser.lastName}`, 201);
    } catch (error) {
        console.log(error);
        return next(new ErrorHandler("An error occurred", 500));
    }
});

export const login = catchAsync(async (req, res, next) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Enter all fields!", 409));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user)
        return next(new ErrorHandler("User not found", 404));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
        return next(new ErrorHandler("Enter correct password", 400));

    sendToken(res, user, `Welcome Back ${user.firstName + " " + user.lastName}`, 201);
});

export const logout = catchAsync(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged Out Successfully!",
    });
});

export const myProfile = catchAsync(async (req, res, next) => {
    const user = req.user._id;

    res.status(200).json({
        user,
    });
});

export const updateUser = catchAsync(async (req, res, next) => {
    const { firstName, lastName, email } = req.body;

    const user = await User.findById(req.user._id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.firstName = lastName;
    if (email) user.firstName = email;

    await user.save();

    res.status(201).json({
        success: true,
        message: "profile updated successfully"
    });
});

export const changePassword = catchAsync(async (req, res, next) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    const user = await User.findById(req.user._id).select("+password");

    if (!user)
        return next(new ErrorHandler("User not found", 404));

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch)
        return next(new ErrorHandler("Enter correct password", 400));

    if (newPassword !== confirmPassword) {
        return next(new ErrorHandler("Password not matching", 400));
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedNewPassword;
    await user.save();

    res.status(200).json({
        success: true,
        message: "Password Changed Successfully!"
    });
});