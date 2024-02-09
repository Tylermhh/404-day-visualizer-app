import mongoose, { Schema } from "mongoose";

export type ITask = {
  _id: string;
  name: string;
  userID: string;
  description?: string;
  category: string;
  priority?: string;
  datesUpdated: IDateEntry[];
  done: boolean;
};

export type IDateEntry = {
  date: Date;
  hours: number;
};

// Schema for Task entries into the database
const TaskSchema = new Schema<ITask>({
  name: { type: String, required: true }, // name of task
  userID: { type: String, ref: "User", required: true }, // ID of User who owns tasl
  description: { type: String, required: false }, // description of task
  category: { type: String, required: true }, // task category
  priority: { type: String, required: false }, // priority of task
  datesUpdated: [
    {
      date: { type: Date, required: true }, // day of entries of time
      hours: { type: Number, required: true, default: 0 }, // hours worked reported
    },
  ], // list of dates for task
  done: { type: Boolean, required: true }, // if task completed
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
