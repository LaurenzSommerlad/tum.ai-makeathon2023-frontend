import { gql } from "@apollo/client/core";

export const ME_QUERY = gql`
  query {
    me {
      id
      username
      email
      role {
        name
      }
    }
  }
`;
export default {};
