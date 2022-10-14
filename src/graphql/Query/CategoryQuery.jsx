import { gql } from "@apollo/client";

const CATEGORY_QUERY = gql`
  {
    allCategories {
      name
      slug
    }
  }
`;

export default CATEGORY_QUERY;