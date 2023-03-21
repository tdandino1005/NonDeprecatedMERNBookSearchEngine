import bookController from "../book/controller.js";
import userController from "../user/controller.js";

export default {
  Query: {
    currentUser(_, __, { user }) {
      return user;
    },
  },

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

  // Keeping it separated means it only gets called when the modules field is requested
  // (parent is the track) - RESOLVER ⛓️
  User: {
    // We are using the parent parameter
    async books(user) {
      return await bookController.index(user.id);
    },
  },
};
