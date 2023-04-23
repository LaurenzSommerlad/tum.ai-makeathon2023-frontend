import { gql } from "@apollo/client/core";

export const GET_LOCATION_BY_ID = gql`
  query location($id: ID!) {
    location(id: $id) {
      data {
        id
        attributes {
          title
          description
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
