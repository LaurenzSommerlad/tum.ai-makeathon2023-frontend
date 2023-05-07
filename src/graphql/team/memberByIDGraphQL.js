import { gql } from "@apollo/client/core";

export const GET_MEMBER_BY_ID = gql`
  query member($id: ID!) {
    member(id: $id) {
      data {
        id
        attributes {
          firstName
          lastName
          shortDescription
          description
          linkedin
          json
          image {
            data {
              attributes {
                url
                previewUrl
              }
            }
          }
        }
      }
    }
  }
`;
export default {};
