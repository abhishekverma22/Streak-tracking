import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: [true, "First name is required.."] },
    last_name: { type: String, required: [true, "Last name is required.."] },
    email: { type: String, required: [true, "Email is required.."] },
    phone_number: {
      type: Number,
      required: [true, "Phone Number is required.."],
    },
    password: {
      type: String,
      required: [true, "Password is required.."],
      select: false,
    },
    refresh_token: { type: String, default: "" },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
