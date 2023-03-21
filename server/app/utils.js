import jwt from "jsonwebtoken";
import config from "./config.js";

export const encodeToken = (payload) => {
  return jwt.sign({ data: payload }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};
