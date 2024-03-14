import mongoose, { Schema } from "mongoose";

// Schema for Task entries into the database
const TaskSchema = new Schema({
  name: { type: String, required: true }, // name of task
  userID: { type: String, ref: "User", required: true }, // ID of User who owns tasl
  description: { type: String, required: false, default: "" }, // description of task
  category: { type: String, required: true }, // task category
  priority: { type: String, required: false, default: "none" }, // priority of task
  createdAt: { type: Date, required: true, default: new Date() },
  datesUpdated: [
    {
      date: { type: Date, required: true, default: new Date() }, // day of entries of time
      hours: { type: Number, required: true, default: 0 }, // hours worked reported
    },
  ], // list of dates for task
  done: { type: Boolean, required: true, default: false }, // if task completed
  deadline: { type: Date, required: false }, // when you'd like to finish it by
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
