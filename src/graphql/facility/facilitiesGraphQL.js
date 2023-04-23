import { gql } from "@apollo/client/core";

export const GET_FACILITIES = gql`
  query facilities(
    $limit: Int
    $locations: [ID]
    $offers: [ID]
    $topics: [ID]
  ) {
    facilities(
      pagination: { limit: $limit }
      filters: {
        locations: { id: { in: $locations } }
        topics: { id: { in: $topics } }
        offers: { id: { in: $offers } }
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
