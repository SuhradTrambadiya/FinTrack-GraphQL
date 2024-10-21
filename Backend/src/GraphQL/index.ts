// src/graphql/graphQlServer.ts
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4"; // Adjusted import for express middleware
import { app } from "../server";
import userModule from "./User"; // Import the user module
import TransactionModule from "./Transaction";

const graphQlServer = async () => {
  // Combine user typeDefs with your existing typeDefs
  const typeDefs = `#graphql
    ${userModule.userTypeDef}
    ${TransactionModule.TransactionTypeDef}

    type Query {
      hello: String
    }
  `;

  // Combine user resolvers with your existing resolvers
  const resolvers = {
    Query: {
      hello: () => "Hello World!",
      ...userModule.userQueryResolver, // Spread user query resolvers
      ...TransactionModule.transactionQueryResolver
    },
    // Mutation: {
    //   ...userModule.userMutationsResolver, // Spread user mutation resolvers
    // },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the Apollo server and wait for it to be ready
  await server.start();

  // Apply Apollo middleware to your Express app
  app.use("/graphql", expressMiddleware(server));
};

export default graphQlServer;
