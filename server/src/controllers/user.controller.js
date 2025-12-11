import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";

const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone_number } = req.body;
    const encryptPassword = await bcrypt.hash(password, 10);

    await UserModel.create({
      first_name,
      last_name,
      email,
      password: encryptPassword,
      phone_number,
    });

    res.status(200).json({ msg: "User Created Successful.." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const fetchUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    console.log(users);
    res.json({ user: users });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

export default createUser;
