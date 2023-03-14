import { Schema } from "mongoose";
import formatCurrentDateTime from "../format-date-time.js";

const CommentSchema = new Schema(
  {
    commentText: {
      type: String,
      required: "You need to leave a comment!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      get(timestamp) {
        return formatCurrentDateTime(timestamp);
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
  }
);

export default CommentSchema;
