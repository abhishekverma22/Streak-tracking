import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    goal: { type: String, required: true },
    duration: { type: Date },
    alert_time: { type: String },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", taskSchema);

export default TaskModel;
