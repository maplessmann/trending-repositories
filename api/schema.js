const fakeDatabase = require('./database')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = require('graphql')

const RepositoryType = new GraphQLObjectType({
  name: 'Repository',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    url: { type: GraphQLString },
    stars: { type: GraphQLInt },
    forks: { type: GraphQLInt },
    votes: { type: GraphQLInt },
  },
})

const TrendingRepositoriesRootType = new GraphQLObjectType({
  name: 'TrendingRepositories',
  fields: () => ({
    repositories: {
      type: new GraphQLList(RepositoryType),
      resolve(parent, args) {
        return fakeDatabase
      },
    },
  }),
})

module.exports = new GraphQLSchema({
  query: TrendingRepositoriesRootType,
})
