import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected`);
    }catch(err){
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}