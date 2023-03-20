import jwt from "jsonwebtoken";
import config from "./config.js";

export const generateToken = (payload) => {
  return jwt.sign({ data: payload }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};
