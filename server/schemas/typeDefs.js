const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book{
  bookId: String
  title: String
  description: String
  image: String
  link: String
  authors: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: String!, title: String!, description: String!, image: String, link: String, authors: [String!]!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
