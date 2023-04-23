import { gql } from "@apollo/client/core";

// todo
export const UPDATE_ARTICLE = gql`
  mutation updateOffer($id: ID!, $stock: Int!) {
    updateOffer(id: $id, data: { stock: $stock }) {
      data {
        id
      }
    }
  }
`;
export default {};
