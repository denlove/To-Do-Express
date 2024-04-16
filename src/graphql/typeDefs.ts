import { gql } from 'graphql-tag'

export const typeDefs = gql`
    type RandomWord {
        id: ID!
        text: String!
    }

    type Mutation {
        addRandomWord(text: String!): RandomWord
    }

    type Query {
        randomWords: [RandomWord]
    }
`
