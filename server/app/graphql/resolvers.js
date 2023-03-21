import bookController from "../book/controller.js";
import userController from "../user/controller.js";

export default {
  Mutation: {
    async createUser(_, { user }) {
      const token = await userController.create(user);

      return { token };
    },
    async login(_, { username, password }) {
      const token = await userController.show(username, password);

      return { token };
    },
    async saveBook(_, { book }, { user }) {
      return await bookController.create({ ...book, userId: user.id });
    },
    async removeBook(_, { bookId }, { user }) {
      return await bookController.delete(bookId, user.id);
    },
  },
};
