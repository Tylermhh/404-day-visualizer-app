import mongoose, { Schema } from "mongoose"

// Schema for entry into User database
const UserSchema = new Schema({
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  categories: [
    {
      name: { type: String, required: true },
      color: { type: String, required: true }
    }
  ]
})

const User = mongoose.model("User", UserSchema)

export default User