import { ApolloServer } from '@apollo/server'
import { buildSubgraphSchema } from '@apollo/subgraph'
import { typeDefs } from '../graphql/typeDefs'
import { resolvers } from '../graphql/resolvers'

const apolloServer: ApolloServer = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
})

export const startApolloServer = async (apolloServer: ApolloServer) => {
    await apolloServer.start()
}

export default apolloServer
