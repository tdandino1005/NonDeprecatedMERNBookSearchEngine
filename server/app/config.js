import dotenv from "dotenv";

// TODO{manavm1990}: Set path to .env file for consistency regardless of where 'npm start' is run from
dotenv.config();

export default {
  jwt: {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    secret: process.env.JWT_SECRET,
  },
  mongoURL: process.env.MONGO_URL || "mongodb://localhost:27017/books",
  port: process.env.PORT || 4000,
  saltRounds: process.env.SALT_ROUNDS || 10,
};
