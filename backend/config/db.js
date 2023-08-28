import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce")
        console.log(`DataBase connected with ${connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default connectToDatabase;