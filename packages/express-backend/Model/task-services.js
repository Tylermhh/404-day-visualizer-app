import { startOfDay, endOfDay } from "date-fns";
import connectDB from "../db.js";
import taskModel from "./task.js";

export const findTaskById = async id => {
  await connectDB();
  return await taskModel.findById(id);
};

export const findTaskByUserId = async userId => {
  await connectDB();
  return await taskModel.find({ userId: userId });
};

export const createTask = async task => {
  await connectDB();
  const newTask = new taskModel(task);
  const promise = newTask.save();
  return promise;
};

// no date -> All user's tasks
// date -> Always passed to view day's tasks
// stretch -> Date Range

export const getTasks = async (userId, startDate, endDate, category, done) => {
  await connectDB();
  let promise;

  // category specified
  if (category != undefined) {
    if (startDate === undefined || endDate === undefined) {
      promise = taskModel.find({
        userID: userId,
        category: category,
        done: done
      })
    } else {
      promise = taskModel.find({
        userID: userId,
        createdAt: {
          $gte: startOfDay(startDate),
          $lte: endOfDay(endDate)
        },
        category: category,
        done: done
      })
    }

    // all categories
  } else {
    promise = taskModel.find({
      userID: userId,
      createdAt: {
        $gte: startOfDay(startDate),
        $lte: endOfDay(endDate)
      },
      done: done
    })
  }

  return promise;
};

export const updateTaskById = async (id, updated) => {
  await connectDB();
  return taskModel.updateOne({ id: id }, updated);
};

export const deleteTaskById = async id => {
  await connectDB();
  return taskModel.findByIdAndDelete(id);
};
