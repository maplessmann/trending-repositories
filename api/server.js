const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema.js')

const PORT = process.env.SERVER_PORT || 4000
const app = express()

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true, // TODO: disable on production
  })
)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
