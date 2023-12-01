import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profile_picture: String,
  status: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
