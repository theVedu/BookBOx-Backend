import mongoose from "mongoose";
import { mongodbDataBaseName } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_DATABASE_DEMO_URL);

        console.log(`\n MongoDB connected successfully! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("Error: Connection Instance Failed!", error);
        process.exit(1);
    }
};

export default connectDB;
