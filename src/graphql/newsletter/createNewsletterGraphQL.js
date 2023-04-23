import { gql } from "@apollo/client/core";

export const CREATE_NEWSLETTER = gql`
  mutation createNewsletter($email: String!) {
    createNewsletter(data: { email: $email }) {
      data {
        id
      }
    }
  }
`;
export default {};
