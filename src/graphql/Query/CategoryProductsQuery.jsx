import { gql } from "@apollo/client";

const CATEGORY_PRODUCT_QUERY = gql` 
{

 categoryProducts($slug: "mobiles") {
    name
    }
  }
`;

export default CATEGORY_PRODUCT_QUERY;
