import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone_number } = req.body;

    if (!first_name && !last_name && !email && !password && !phone_number) {
      return res.status(400).json({
        msg: "All fields are required!",
        error: true,
        success: false,
      });
    }

    // DUPLICATE CHECK
    const existingUser = await UserModel.findOne({
      $or: [{ email }, { phone_number }],
    });

    if (existingUser) {
      return res.status(400).json({
        msg: "User already exists with this email or phone number",
        error: true,
        success: false,
      });
    }

    // HASH PASSWORD
    const encryptPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    await UserModel.create({
      first_name,
      last_name,
      email,
      password: encryptPassword,
      phone_number,
    });

    res
      .status(200)
      .json({ msg: "User Created Successful..", error: false, success: true });
  } catch (error) {
    res.status(500).json({ msg: error.message, error: true, success: false });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email && !password) {
      return res.status(400).json({
        msg: "Email and password are required",
        success: false,
        error: true,
      });
    }

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "User not found",
        success: false,
        error: true,
      });
    }

    // Compare password

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: "Invalid password",
        success: false,
        error: true,
      });
    }

  } catch (error) {}
};

export default createUser;
