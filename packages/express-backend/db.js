import mongoose from "mongoose"
import * as dotenv from "dotenv"
dotenv.config()

const url = process.env.MONGO_URI
const urlString = "mongodb+srv://404manager:S2rypinCTmw63y6T@cluster404.tvc0s3w.mongodb.net/?retryWrites=true&w=majority";

let connection
const connectDB = async () => {
  if (!connection) {
    console.log("Connected to MongoDB")
    connection = await mongoose.connect(url || urlString)
    return connection
  }
  console.log("Connected to MongoDB")
}
connectDB()
export default connectDB
