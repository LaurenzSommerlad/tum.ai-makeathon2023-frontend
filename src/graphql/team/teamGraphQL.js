import { gql } from "@apollo/client/core";

export const GET_TEAM = gql`
  query members($limit: Int) {
    members(pagination: { limit: $limit }) {
      data {
        id
        attributes {
          firstName
          lastName
          shortDescription
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
