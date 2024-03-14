import connectDB from "../db.js";
import userModel from "./user.js";

export const getUsers = async name => {
  await connectDB();
  if (name === undefined) {
    const users = await userModel.find();
    return users;
  } else if (name) {
    const usersByName = await userModel.findUserByName(name);
    return usersByName;
  }
};

export const findUserById = async id => {
  await connectDB();
  const user = await userModel.findById(id);
  return user;
};

export const addUser = async user => {
  await connectDB();
  const userToAdd = new userModel(user);
  const savedUser = await userToAdd.save();
  return savedUser;
};

export const updateUserById = async (id, updated) => {
  await connectDB();
  let promise;

  promise = userModel.findByIdAndUpdate(id, updated, { new: true });

  return promise;
};
