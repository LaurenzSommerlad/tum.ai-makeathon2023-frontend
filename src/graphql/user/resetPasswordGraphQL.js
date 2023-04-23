import { gql } from "@apollo/client/core";

export const RESET_PASSWORD_MUTATION = gql`
  mutation (
    $password: String!
    $passwordConfirmation: String!
    $code: String!
  ) {
    resetPassword(
      password: $password
      passwordConfirmation: $passwordConfirmation
      code: $code
    ) {
      jwt
      user {
        id
      }
    }
  }
`;
export default {};
