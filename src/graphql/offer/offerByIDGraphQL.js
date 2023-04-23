import { gql } from "@apollo/client/core";

export const GET_OFFER_BY_ID = gql`
  query offer($id: ID!) {
    offer(id: $id) {
      data {
        id
        attributes {
          title
          shortDescription
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
