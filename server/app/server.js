import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import express from "express";
import http from "http";
import config from "./config.js";
import decodeUser from "./decode-user.js";
import { resolvers, typeDefs } from "./graphql/index.js";

const { port } = config;

const app = express();

// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function init() {
  // Note you must call `server.start()` on the `ApolloServer`
  // instance before passing the instance to `expressMiddleware`
  await server.start();

  // Specify the path where we'd like to mount our server
  app.use(
    "/",
    cors(),
    express.json(),
    expressMiddleware(server, { context: decodeUser })
  );

  // Modified server startup
  await new Promise((resolve) => httpServer.listen({ port }, resolve));

  console.info(`🚀 Server ready at http://localhost/${port}`);
}

export default init;
