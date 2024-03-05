import mongoose from "mongoose";
import connectDB from "../db.js";
import userModel from "./user.js";
import type {IUser} from "./user.js";

export const getUsers = async (name: string, job: string) => {
  await connectDB();
  if (name === undefined && job === undefined) {
    const users = await userModel.find();
    return users;
  } else if (name && !job) {
    const usersByName = await findUserByName(name);
    return usersByName
  } else if (job && !name) {
    const usersByJob = await findUserByJob(job);
    return usersByJob;
  }
};

const findUserById = async (id: string) => {
  await connectDB();
  const user = await userModel.findById(id);
  return user;
};

const addUser = async (user: IUser) => {
  await connectDB();
  const userToAdd = new userModel(user);
  const savedUser = await userToAdd.save();
  return savedUser;
};

const findUserByName = async (name: string) => {
  await connectDB();
  const users = await userModel.find({ name });
  return users;
};

const findUserByJob = async (job: string) => {
  await connectDB();
  const users = await userModel.find({ job });
  return users;
};

export default {
  addUser,
  getUsers,
  findUserById,
  findUserByName,
  findUserByJob,
};