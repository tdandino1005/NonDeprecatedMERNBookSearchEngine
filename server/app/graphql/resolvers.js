import { ApolloServerErrorCode } from "@apollo/server/errors";
import { GraphQLError } from "graphql";
import bookController from "../book/controller.js";
import userController from "../user/controller.js";

function handleUnauthorizedError(error) {
  if (error.extensions?.code !== ApolloServerErrorCode.GRAPHQL_PARSE_FAILED) {
    throw new GraphQLError(error.message, {
      extensions: {
        code: "UNAUTHORIZED",
      },
    });
  }

  throw error;
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
      if (!username || !password)
        throw new GraphQLError("Username and password are required.", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });

      const token = await userController.show(username, password);

      if (!token) handleUnauthorizedError(new Error("Invalid credentials."));

      return { token };
    },
    async saveBook(_, { book }, { user }) {
      // Don't bother controller if no user
      if (!user) {
        throw new GraphQLError("You must be logged in to save 💾 a book.", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      return await bookController.create({ ...book, userId: user.id });
    },
    async removeBook(_, { bookId }, { user }) {
      // Don't bother controller if no user
      if (!user) {
        throw new GraphQLError("You must be logged in to remove 🔥 a book.", {
          extensions: {
            code: "UNAUTHENTICATED",
          },
        });
      }

      try {
        return await bookController.delete(bookId, user.id);
      } catch (error) {
        handleUnauthorizedError(error);
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
