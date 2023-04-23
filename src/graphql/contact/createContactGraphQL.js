import { gql } from "@apollo/client/core";

export const CREATE_CONTACT = gql`
  mutation createContact(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phone: String
    $subject: String!
    $message: String!
  ) {
    createContact(
      data: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        phone: $phone
        message: $message
        subject: $subject
      }
    ) {
      data {
        id
      }
    }
  }
`;
export default {};
