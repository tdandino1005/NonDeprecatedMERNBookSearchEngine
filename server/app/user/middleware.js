import jwt from "jsonwebtoken";
import config from "../config.js";

export const decodeToken = (req, _, next) => {
  // Split "Bearer <token>" into ["Bearer", "<token>"]
  const token = req.headers.authorization?.split(" ")[1];

  //   This will either be undefined or an object with the data property
  let decodedToken;

  if (token) {
    decodedToken = jwt.verify(token, config.jwt.secret);
  }
  //   Set the user tothe decoded token's data property
  req.user = decodedToken?.data;

  // Using next() will allow the request to continue to the next middleware
  // If we don't call next(), the request will hang
  next();
};
