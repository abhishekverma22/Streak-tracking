import express from "express";
import createUser, { fetchUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", createUser);
userRouter.get("/get-user", fetchUser);

export default userRouter;
