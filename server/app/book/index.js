import { Schema, model } from "mongoose";

export const BookSchema = new Schema(
  {
    authors: [String],
    description: { type: String, required: true },
    bookId: { type: String, required: true },
    image: String,
    link: String,
    title: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default model("Book", BookSchema);
