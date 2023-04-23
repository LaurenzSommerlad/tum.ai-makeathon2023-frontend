import { gql } from "@apollo/client/core";

export const GET_ARTICLES_BY_ID = gql`
  query articlesByID($id: [ID]!) {
    articles(filters: { id: { in: $id } }) {
      data {
        id
        attributes {
          title
          available
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
