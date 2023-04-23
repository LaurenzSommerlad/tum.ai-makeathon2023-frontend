import { gql } from "@apollo/client/core";

export const GET_FILTER_OPTIONS = gql`
  query filter(
    $limit: Int
    $locations: [ID]
    $facilities: [ID]
    $topics: [ID]
    $offers: [ID]
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
        }
      }
    }
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
        }
      }
    }
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
        }
      }
    }
    facilities(
      pagination: { limit: $limit }
      filters: {
        locations: { id: { in: $locations } }
        offers: { id: { in: $offers } }
        topics: { id: { in: $topics } }
      }
    ) {
      data {
        id
        attributes {
          title
        }
      }
    }
  }
`;
export default {};
