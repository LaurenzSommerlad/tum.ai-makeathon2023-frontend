import { gql } from "@apollo/client/core";

export const GET_FACILITY_BY_ID = gql`
  query facility($id: ID!) {
    facility(id: $id) {
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
