import { Schema, connect, model } from "mongoose";
import { boolean } from "webidl-conversions";

connect("mongodb://localhost:27017/SWE363");

const userSchema = Schema({
  id: Number,
  phone: String,
  password: String,
  email: String,
});

const planSchema = Schema({
  plan: String,
  name: String,
  CreatedAt: { type: Date, default: Date.now() },
  likes: Number,
  major: String,
  summer: Boolean,
});

const User = model("User", userSchema);
const Plan = model("Plan", planSchema);

export { User, Plan };
