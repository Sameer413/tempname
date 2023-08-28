import app from "./app.js";
import connectToDatabase from "./config/db.js";

connectToDatabase();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on PORT ${process.env.PORT || 5000}`);
});