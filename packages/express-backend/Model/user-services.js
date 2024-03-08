import connectDB from "../db.js"
import userModel from "./user.js"

export const getUsers = async (name, job) => {
  await connectDB()
  if (name === undefined && job === undefined) {
    const users = await userModel.find()
    return users
  } else if (name && !job) {
    const usersByName = await findUserByName(name)
    return usersByName
  } else if (job && !name) {
    const usersByJob = await findUserByJob(job)
    return usersByJob
  }
}

export const findUserById = async id => {
  await connectDB()
  const user = await userModel.findById(id)
  return user
}

export const addUser = async user => {
  await connectDB()
  const userToAdd = new userModel(user)
  const savedUser = await userToAdd.save()
  return savedUser
}

export const findUserByName = async name => {
  await connectDB()
  const users = await userModel.find({ name })
  return users
}

export const findUserByJob = async job => {
  await connectDB()
  const users = await userModel.find({ job })
  return users
}