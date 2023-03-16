import dotenv from "dotenv";

dotenv.config();

export default {
  jwt: {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    secret: process.env.JWT_SECRET,
  },
  mongooseSchemaOptions: {
    new: true,
    runValidators: true,
    strict: "throw",
    versionKey: false,
  },
  mongoURL: process.env.MONGO_URL,
  port: process.env.PORT || 4000,
};
