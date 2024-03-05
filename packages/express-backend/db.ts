import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();


const url: string = process.env.MONGO_URI as string;


let connection: typeof mongoose;
const connectDB = async () => {
  if (!connection) {
    console.log("Connected to MongoDB");
    connection = await mongoose.connect(url);
    return connection;
  }
  console.log("Connected to MongoDB");
};
connectDB();
export default connectDB;
