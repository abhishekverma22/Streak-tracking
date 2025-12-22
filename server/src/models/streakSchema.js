import mongoose from "mongoose";

const streakSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
  month: { type: String },
  dates: [{ date: { type: number }, done: { type: Boolean, default: false } }],
});

const StreakModel = mongoose.model("Streak", streakSchema);
export default StreakModel;
