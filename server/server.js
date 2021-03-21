const express = require("express");
const cors = require("cors");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const app = express();

app.use(cors());

// Put together a schema
const schema = makeExecutableSchema({
    typeDefs: mergeTypeDefs(typeDefs),
    resolvers,
});

// The GraphQL endpoint
app.use("/graphql", express.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// Start the server
app.listen((8080), () => {
    // eslint-disable-next-line no-console
    console.log("Go to http://localhost:8080/graphiql to run queries!");
});

module.exports = app;
