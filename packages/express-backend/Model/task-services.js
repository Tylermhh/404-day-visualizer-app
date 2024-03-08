import { startOfDay, endOfDay } from "date-fns"
import connectDB from "../db.js"
import taskModel from "./task.js"

export const findTaskById = async id => {
  await connectDB()
  return await taskModel.findById(id)
}

export const findTaskByUserId = async userId => {
  await connectDB()
  return await taskModel.find({ userId: userId })
}

export const createTask = async task => {
  await connectDB()
  const newTask = new taskModel(task)
  const promise = newTask.save()
  return promise
}

export const getTasks = async (userId, date) => {
  await connectDB()
  let promise

  // Today
  if (date === undefined) {
    promise = taskModel.find({
      userID: userId,
      createdAt: {
        $gte: startOfDay(new Date()),
        $lte: endOfDay(new Date())
      },
      done: false
    })
  } else {
    // Specific Day
    promise = taskModel.find({
      userID: userId,
      createdAt: {
        $gte: startOfDay(date),
        $lte: endOfDay(date)
      },
      done: false
    })
  }

  return promise
}

export const updateTaskById = async (id, updated) => {
  await connectDB()
  return taskModel.updateOne({ id: id }, updated)
}

export const deleteTaskById = async id => {
  await connectDB()
  return taskModel.findByIdAndDelete(id)
}