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
  },
};
