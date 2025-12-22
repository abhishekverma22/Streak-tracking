import TaskModel from "../models/task.model.js";

const addTask = async (req, res) => {
  try {
    const userID = req.params.userID;
    const { goal, duration, alert_time } = req.body;

    if (!goal || !alert_time) {
      return res.status(400).json({
        message: "Goal and alet time are required",
      });
    }

    // Create new task
    await TaskModel.create({
      userID,
      goal,
      duration,
      alert_time,
    });

    res.status(201).json({
      message: "Task added successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: error || error.message, error: true, success: false });
  }
};

export default addTask;
