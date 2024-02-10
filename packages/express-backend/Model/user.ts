import mongoose, { Schema } from "mongoose";

export type IUser = {
  username: string;
  password: string;
  categories: ICategory[];
};

export type ICategory = {
  name: string;
  color: string;
};

// Schema for entry into User database
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  categories: [
    {
      name: { type: String, required: true },
      color: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

export default User;
