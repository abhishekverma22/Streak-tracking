import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, require: [true, "First name is required.."] },
    last_name: { type: String, require: [true, "Last name is required.."] },
    email: { type: String, require: [true, "Email is required.."] },
    phone_number: {
      type: Number,
      require: [true, "Phone Number is required.."],
    },
    password: { type: String, require: [true, "Password is required.."] },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
