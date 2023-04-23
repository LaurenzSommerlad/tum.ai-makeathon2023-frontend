import { gql } from "@apollo/client/core";

export const GET_LOCATIONS = gql`
  query locations(
    $limit: Int
    $offers: [ID]
    $facilities: [ID]
    $topics: [ID]
  ) {
    locations(
      pagination: { limit: $limit }
      filters: {
        offers: { id: { in: $offers } }
        topics: { id: { in: $topics } }
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
