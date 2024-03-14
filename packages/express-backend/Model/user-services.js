import connectDB from "../db.js";
import userModel from "./user.js";

export const getUsers = async (name, job) => {
  await connectDB();
  if (name === undefined && job === undefined) {
    const users = await userModel.find();
    return users;
  } else if (name && !job) {
    const usersByName = await userModel.findUserByName(name);
    return usersByName;
  } else if (job && !name) {
    const usersByJob = await userModel.findUserByJob(job);
    return usersByJob;
  }
};

export const findUserById = async id => {
  await connectDB();
  const user = await userModel.findById(id);
  return user;
};

export const addUser = async user => {
  await connectDB()
  const userToAdd = new userModel(user)
  const savedUser = await userToAdd.save()
  return savedUser
}

export const updateUserById = async (id, updated) => {
  await connectDB()
  let promise

  promise = userModel.findByIdAndUpdate(id, updated, { new: true })

  return promise
}


