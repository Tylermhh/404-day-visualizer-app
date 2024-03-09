import * as mongoose from "mongoose";
import { Schema, model, connect, ConnectOptions } from "mongoose";
import { startOfDay, endOfDay } from "date-fns";
import connectDB from "../db.js";
import taskModel from "./task.js";
import type {ITask} from "./task.js";

export const findTaskById = async (id: string) => {
  await connectDB();
  return await taskModel.findById(id);
}

export const findTaskByUserId = async (userId: string) => {
  await connectDB();
  return await taskModel.find({userId: userId});
}

export const createTask = async (task: ITask) => {
  await connectDB();
  const newTask: mongoose.Document = new taskModel(task);
  const promise = newTask.save();
  return promise;
}



// no date -> All user's tasks
// date -> Always passed to view day's tasks
// stretch -> Date Range

export const getTasks = async (userId: string, startDate: Date, endDate: Date,
                               category: string | undefined, done: Boolean) => {
  await connectDB();
  let promise;

  // category specified
  if (category != undefined) {
    promise = taskModel.find({
      userID: userId,
      createdAt: {
        $gte: startOfDay(startDate),
        $lte: endOfDay(endDate)
      },
      category: category,
      done: done
    });

  // all categories
  } else {
    promise = taskModel.find({
      userID: userId,
      createdAt: {
        $gte: startOfDay(startDate),
        $lte: endOfDay(endDate)
      },
      done: done
    });
  }

  return promise;
}

export const updateTaskById = async (id: string, updated: ITask) => {
  await connectDB();
  return taskModel.updateOne({id: id}, updated)
}

export const deleteTaskById = async (id: string) => {
  await connectDB();
  return taskModel.findByIdAndDelete(id);
}
