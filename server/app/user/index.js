import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema, model } from "mongoose";
import config from "../config.js";
import { ThoughtSchema } from "../thought/index.js";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  thoughts: [ThoughtSchema],
});

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.authenticate = function (password) {
  // TODO: Implement this method
};

export default model("User", UserSchema);
