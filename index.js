const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const People = require('./database')

const typeDefs = 'schema.graphql'

const resolvers = {
  Query,
  Mutation
}
const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers
})

server.start({ port: 7777 }, () => console.log(`The server is running on http://localhost:7777`))