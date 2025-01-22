import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query Me {
    me {
      savedBooks {
        bookId
        title
        description
        authors
        image
        link
      }
    }
  }
`;