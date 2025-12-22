import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./src/configs/connectDB.js";
import userRouter from "./src/routes/user.route.js";
import cors from "cors";
import taskRouter from "./src/routes/addTask.route.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());
app.get("/test", (req, res) => {
  res.json({ msg: "This Test Route" });
});

app.use("/api", userRouter);
app.use("/api", taskRouter);

connectDB().then(() => {
  app.listen(PORT, () => console.log("Server running on port number", PORT));
});
