import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config()

const url = process.env.MONGO_URI

let connection
const connectDB = async () => {
  if (!connection) {
    console.log("Connected to MongoDB")
    connection = await mongoose.connect(url)
    return connection
  }
  console.log("Connected to MongoDB")
}
connectDB()
export default connectDB
