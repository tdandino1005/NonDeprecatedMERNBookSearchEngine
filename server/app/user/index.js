import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import config from "../config.js";
import { generateToken } from "../utils.js";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: { type: String, required: true },

    // 📚 is a separate collection to avoid unbounded arrays 🦉
    // https://www.mongodb.com/docs/atlas/schema-suggestions/avoid-unbounded-arrays/#avoid-unbounded-arrays
  },
  {
    versionKey: false,
  }
);

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, config.saltRounds);
  }

  next();
});

UserSchema.methods.authenticate = async function (password) {
  const isCorrectPassword = await bcrypt.compare(
    password,

    // 'this' references the document (user) that called this method
    this.password
  );

  if (!isCorrectPassword) {
    throw new Error("Incorrect password");
  }
  // Use generateToken from utils.js
  return generateToken({ user: { username: this.username, id: this._id } });
};

export default model("User", UserSchema);
