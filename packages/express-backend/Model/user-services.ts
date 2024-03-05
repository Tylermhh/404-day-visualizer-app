import * as mongoose from "mongoose";
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

export const findUserById = async (id: string) => {
  await connectDB();
  const user = await userModel.findById(id);
  return user;
};

export const addUser = async (user: IUser) => {
  await connectDB();
  const userToAdd = new userModel(user);
  const savedUser = await userToAdd.save();
  return savedUser;
};

export const findUserByName = async (name: string) => {
  await connectDB();
  const users = await userModel.find({ name });
  return users;
};

export const findUserByJob = async (job: string) => {
  await connectDB();
  const users = await userModel.find({ job });
  return users;
};