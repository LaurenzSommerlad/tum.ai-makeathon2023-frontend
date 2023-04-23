import { gql } from "@apollo/client/core";

export const GET_TOPIC_BY_ID = gql`
  query topic($id: ID!) {
    topic(id: $id) {
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
