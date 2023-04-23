import { gql } from "@apollo/client/core";

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation ($email: String!) {
    forgotPassword(email: $email) {
      ok
    }
  }
`;
export default {};
