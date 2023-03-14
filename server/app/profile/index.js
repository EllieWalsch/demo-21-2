import { Schema, model } from "mongoose";

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  skills: [
    // No need for a separate SCHEMA for primitive types
    {
      type: String,
      default: [],
    },
  ],
});

export default model("Profile", ProfileSchema);
