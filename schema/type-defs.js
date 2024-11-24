const {gql} = require('apollo-server')

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie]
    }

    type Movie {
        title: String!
        releaseYear: Int!
        genre: [String!]
        director: String!
        cast: [String!]
        synopsis: String!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(title: String!):Movie!

    }

    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = BRAZIL
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
    }

    enum Nationality {
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }
`

module.exports = {typeDefs}