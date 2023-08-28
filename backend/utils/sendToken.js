import generateToken from './jwtToken.js'

const sendToken = (res, user, message, statusCode = 200) => {
    const token = generateToken(user._id);

    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "none",
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        message,
        user,
    });
}

export default sendToken;