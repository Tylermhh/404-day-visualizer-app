import * as mongoose from "mongoose";
import { Schema, model, connect, ConnectOptions } from "mongoose";
import taskModel from "./task";
import type {ITask} from "./task";

import { startOfDay, endOfDay } from "date-fns";

const dbUri: string = "mongodb://localhost:27017/tasks";

mongoose.set("debug", true);

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
  .catch((error) => console.log(error));

export const findTaskById = async (id: string) => {
  return await taskModel.findById(id);
}

export const findTaskByUserId = async (userId: string) => {
  return await taskModel.find({userId: userId});
}

export const createTask = async (task: ITask) => {
  const newTask: mongoose.Document = new taskModel(task);
  const promise = newTask.save();
  return promise;
}

export const getTasks = async(userId: string, date: Date) => {
  let promise;

  // Today
  if (date === undefined) {
    promise = taskModel.find({
      userID: userId,
      createdAt: {
        $gte: startOfDay(new Date()),
        $lte: endOfDay(new Date())
      },
      done: false,
    })
  } else {
  // Specific Day
    promise = taskModel.find({
      userID: userId,
      createdAt: {
        $gte: startOfDay(date),
        $lte: endOfDay(date)
      },
      done: false,
    })
  }

  return promise;
}

export const updateTaskById = async (id: string, updated: ITask) => {
  return taskModel.updateOne({id: id}, updated)
}

export const deleteTaskById = async (id: string) => {
  return taskModel.findByIdAndDelete(id);
}
