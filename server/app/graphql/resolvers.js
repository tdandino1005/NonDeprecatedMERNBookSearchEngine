// import the user controller
import UserController from "../user/controller.js";


  // Used mutation instead of query because it is a change to the database
  Mutation: {
    async createUser(_, { user }) {
      const token = await UserController.create(user);

      return { token };
    },
    async login(_, { username, password }) {
      const token = await UserController.login(username, password);

      return { token };
    },
  },
};

export default resolvers;
