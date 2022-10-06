import { gql } from "@apollo/client";

const PRODUCT_QUERY = gql`
  {
    allProducts {
      name
      title
      price
      stock
      thumbnail
      category {
        slug
        name
      }
    }
  }
`;
export default PRODUCT_QUERY;