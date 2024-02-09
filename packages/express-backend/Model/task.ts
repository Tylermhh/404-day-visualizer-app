import mongoose from "mongoose";

// Schema for Task entries into the database
const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  priority: { type: String, required: false },
  datesUpdated: [
    {
      date: { type: Date, required: true },
      time: { type: Number, required: true },
    },
  ],
  done: { type: Boolean, required: true },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
