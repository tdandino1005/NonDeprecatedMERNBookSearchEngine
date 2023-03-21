import dotenv from "dotenv";

dotenv.config();

export default {
  jwt: {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    secret: process.env.JWT_SECRET,
  },
  // Added this to make sure that the versionKey is not added to the document
  mongooseSchemaOptions: {
    new: true,
    runValidators: true,
    strict: "throw",
    versionKey: false,
  },
  mongoURL: process.env.MONGO_URL || "mongodb://localhost:27017/books",
  port: process.env.PORT || 4000,
  saltRounds: process.env.SALT_ROUNDS || 10,
};
