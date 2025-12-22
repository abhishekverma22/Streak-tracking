import express from "express";
import addTask from "../controllers/addTask.controller.js";

const taskRouter = express.Router();

taskRouter.post("/add-task/:userID", addTask);


export default taskRouter;
