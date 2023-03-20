import BookController from "../book/controller.js";
import UserController from "../user/controller.js";

export default {
  Query: {
    async books(_, __, { user }) {
      return await BookController.index(user.user.id);
    },
  },

  Mutation: {
    async createUser(_, { user }) {
      const token = await UserController.create(user);
      return { token };
    },
    async login(_, { username, password }) {
      const token = await UserController.show(username, password);
      return { token };
    },
    async saveBook(_, { book }, { user }) {
      return await BookController.create({ ...book, userId: user.user.id });
    },
    async removeBook(_, { bookId }, { user }) {
      return await BookController.delete(bookId, user.user.id);
    },
  },
};
