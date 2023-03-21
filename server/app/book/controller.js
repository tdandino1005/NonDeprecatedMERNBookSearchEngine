import Book from "./index.js";

const controller = {
  create(newBook) {
    return Book.create(newBook);
  },
  index(userId) {
    return Book.find({ userId });
  },
  show(bookId) {
    return Book.findOne({ bookId });
  },
  async delete(bookId, userId) {
    console.log(
      "🚀 ~ file: controller.js ~ line 20 ~ userId",
      userId,
      typeof userId
    );
    // Does this  📖  belong to the logged in user?
    const bookToDelete = await this.show(bookId);

    console.log(
      "🚀 ~ file: controller.js ~ line 24 ~ bookToDelete",
      bookToDelete
    );

    if (bookToDelete.userId !== userId) {
      console.log(bookToDelete.userId, userId, "from the if statement");
      // TODO: Use Apollo Server 4 error handling
      throw new Error("You are not authorized to delete this book.");
    }

    return bookToDelete;
  },
};

export default controller;
