import { GraphQLError } from "graphql";
import bookController from "../book/controller.js";
import userController from "../user/controller.js";

// This is a helper function to handle anticipated errors 👇🏾
function handleError(error, code) {
  throw new GraphQLError(error.message, {
    extensions: {
      code,
    },
  });
}

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

      if (!token)
        handleError(new Error("Invalid credentials."), "UNAUTHORIZED");

      return { token };
    },
    async saveBook(_, { book }, { user }) {
      // Don't bother controller if no user
      if (!user)
        handleError(
          new Error("You must be logged in to save 📖 a book."),
          "UNAUTHENTICATED"
        );

      return await bookController.create({ ...book, userId: user.id });
    },
    async removeBook(_, { bookId }, { user }) {
      // Don't bother controller if no user
      if (!user)
        handleError(
          new Error("You must be logged in to remove 🔥 a book."),
          "UNAUTHENTICATED"
        );

      try {
        return await bookController.delete(bookId, user.id);
      } catch (error) {
        if (error.message.includes("You are not authorized")) {
          handleError(error, "UNAUTHORIZED");
        } else if (error.message.includes("Book not found")) {
          handleError(error, "BAD_USER_INPUT");
        }
      }
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
