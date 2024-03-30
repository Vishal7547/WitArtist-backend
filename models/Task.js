import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    dueDate: {
      type: String,
      required: true,
    },
    createdDate: {
      type: Date,
      required: true,
    },
    categories: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Task = new mongoose.model("Task", taskSchema);
export default Task;
