import jwt from "jsonwebtoken";
import config from "./config.js";

export const decodeToken = (req, _, next) => {
  // Split "Bearer <token>"
  const token = req.headers.authorization?.split(" ")[1];

  // This will either stay undefined or be set to the decoded token
  let decodedToken;

  if (token) {
    decodedToken = jwt.verify(token, config.jwt.secret);
  }

  req.user = decodedToken?.data;

  next();
};
