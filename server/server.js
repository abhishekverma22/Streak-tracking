import express from "express";
import dotenv from "dotenv";

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ msg: "This Test Route" });
});

app.listen(3000, () => console.log("Server running on port number 3000"));
