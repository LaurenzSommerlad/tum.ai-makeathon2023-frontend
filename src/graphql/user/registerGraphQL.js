import { gql } from "@apollo/client/core";

export const REGISTER_USER = gql`
  mutation register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
      }
    }
  }
`;
export default {};
