import Book from "./index.js";

const controller = {
  create(newBook) {
    return Book.create(newBook);
  },
  index(userId) {
    return Book.find({ userId });
  },
  show(bookId) {
    return Book.findById(bookId);
  },
  delete(bookId) {
    return Book.findByIdAndDelete(bookId);
  },
};

export default controller;
