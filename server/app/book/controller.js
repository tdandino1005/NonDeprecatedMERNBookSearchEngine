import Book from "./index.js";

const controller = {
  create(newBook) {
    return Book.create(newBook);
  },
  index(userId) {
    return Book.find({ userId });
  },
  delete(bookId) {
    return Book.findByIdAndDelete(bookId);
  },
};

export default controller;
