import { gql } from "@apollo/client/core";

export const GET_TOPICS = gql`
  query topics(
    $limit: Int
    $locations: [ID]
    $facilities: [ID]
    $offers: [ID]
  ) {
    topics(
      pagination: { limit: $limit }
      filters: {
        locations: { id: { in: $locations } }
        offers: { id: { in: $offers } }
        facilities: { id: { in: $facilities } }
      }
    ) {
      data {
        id
        attributes {
          title
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
