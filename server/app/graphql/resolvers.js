import userController from "../user/controller.js";

export default {
  Mutation: {
    async createUser(_, { user }) {
      const token = await userController.create(user);

      return { token };
    },
  },
};
