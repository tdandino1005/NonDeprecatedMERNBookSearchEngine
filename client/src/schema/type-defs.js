import { gql } from "apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const CURRENT_USER = gql`
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