import mongoose from "mongoose";
import { config } from "dotenv";

config();

//const MONGO_URI = process.env.MONGO_URI;

export const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb:localhost/users");
        console.log(">>DB connected");
    } catch (error) {
        console.error(error);
    }
};

mongoose.connection.on("connected", () => {
    console.log("Mongo connected to:", mongoose.connection.db.databaseName);
});

mongoose.connection.on("error", (error) => {
    console.error("Mongo connection error:", error);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongo disconnected");
});