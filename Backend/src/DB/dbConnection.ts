import mongoose from "mongoose";

const DBconnection = async (): Promise<void> => {

    try {
        // Connect to MongoDB using the connection URI from environment variables
        const conn = await mongoose.connect(process.env.MONGO_URL as string);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        // Log the error if the connection fails
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process with failure
    }
};

export default DBconnection;
