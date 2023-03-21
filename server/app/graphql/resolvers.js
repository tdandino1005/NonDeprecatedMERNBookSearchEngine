// import the user controller
import bookController from "../book/controller.js";
import userController from "../user/controller.js";

export default {
  // Used mutation instead of query because it is a change to the database
  Mutation: {
    async createUser(_, { user }) {
      const token = await userController.create(user);

      return { token };
    },
    async login(_, { username, password }) {
      const token = await userController.login(username, password);

      return { token };
    },
    async saveBook(_, { book }, { user }) {
      return await bookController.create({ ...book, userId: user.id });
    },
  },
};
