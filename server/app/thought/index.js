import { model, Schema } from "mongoose";
import formatDateTime from "../format-date-time.js";
import CommentSchema from "./comment-schema.js";

export const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "You need to leave a thought 💭!",
      minlength: 1,
      maxlength: 280,
    },
    thoughtAuthor: {
      type: String,
      required: "Gotta leave your name so people know who to thank!",
      trim: true,
    },
    createdAt: {
      type: Date,
      get(timestamp) {
        return formatDateTime(timestamp);
      },
    },
    comments: [CommentSchema],
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
  }
);

export default model("Thought", ThoughtSchema);
