// immporting jwt and config from utils.js
import jwt from "jsonwebtoken";
import config from "./config.js";

// This function is used to generate a token
export const generateToken = (payload) => {
  return jwt.sign({ data: payload }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};
