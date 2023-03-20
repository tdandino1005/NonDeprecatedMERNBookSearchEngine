// TODO{manavm1990}: Move this to a separate '.graphql' file for proper linting (needs Webpack config 😓).
import { gql } from "graphql-tag";

export default gql`
  type Query {
    "All saved 📚 for logged in user"
    books: [Book!]!
  }

  type Mutation {
    "Create a new user"
    createUser(
      username: String!
      email: String!
      password: String!
    ): CreateUserLoginResponse!

    # It is debatable that this is a Query. Convention states that it should generally be a Mutation.
    # https://stackoverflow.com/questions/50189364/shouldnt-the-login-be-a-query-in-graphql/50190570#50190570
    "Login with username and password"
    login(username: String!, password: String!): CreateUserLoginResponse!
    "Save a 📚 for logged in user"
    saveBook(book: BookInput!): Book!
    "Remove a 📚 for logged in user"
    removeBook(bookId: ID!): Book!
  }

  type CreateUserLoginResponse {
    "JWT token"
    token: String!
  }

  type Book {
    "ISBN"
    bookId: ID!
    authors: [String!]!
    description: String
    "URL to book cover image"
    image: String
    "URL to book on Google Books"
    link: String
    title: String!
    "The user who saved this book"
    userId: ID!
  }

  # There doesn't appear to be a way to DRY up this code type 📖 ☝️ 😞
  input BookInput {
    "ISBN"
    bookId: ID!
    authors: [String!]!
    description: String
    "URL to book cover image"
    image: String
    "URL to book on Google Books"
    link: String
    title: String!
    "The currently logged in user"
    userId: ID!
  }
`;
