import { gql } from "@apollo/client/core";

export const GET_OFFERS = gql`
  query offers(
    $limit: Int
    $locations: [ID]
    $facilities: [ID]
    $topics: [ID]
  ) {
    offers(
      pagination: { limit: $limit }
      filters: {
        locations: { id: { in: $locations } }
        topics: { id: { in: $topics } }
        facilities: { id: { in: $facilities } }
      }
    ) {
      data {
        id
        attributes {
          title
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
