<<<<<<< HEAD
import { gql } from "apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
=======
import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
>>>>>>> c22c2d89d3b6059fef4272d8640f5433acdf25e0
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const CURRENT_USER = gql`
<<<<<<< HEAD
    query currentUser {
        currentUser {
            id
            username
            books {
                title
                description
                authors
                image
            }
=======
  query CurrentUser {
    currentUser {
      id
      username
      books {
        title
        description
        link
        image
      }
    }
  }
`;
>>>>>>> c22c2d89d3b6059fef4272d8640f5433acdf25e0
