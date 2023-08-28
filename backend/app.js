import { config } from "dotenv";
import express from "express";
import ErrorMiddleware from "./middleware/error.js";
import cors from 'cors'
config({
    path: "./config/config.env"
});

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({
    extended: true,
}))
app.use(
    cors({
        origin: "http://192.168.43.32:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"]
    })
)


import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import cookieParser from "cookie-parser";

app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

export default app;

app.use(ErrorMiddleware);