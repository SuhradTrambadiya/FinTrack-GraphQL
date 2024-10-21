// src/server.ts
import express from "express";
import cors from "cors";
import graphQlServer from "./GraphQL";
import dotenv from "dotenv";
import DBconnection from "./DB/dbConnection";

dotenv.config();

const PORT = process.env.PORT || 5050;
export const app = express();

DBconnection();

app.use(cors());
app.use(express.json());

// Start GraphQL server and handle potential errors
const startServer = async () => {
  try {
    await graphQlServer();
    // Start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
      console.log(
        `GraphQL endpoint is available at http://localhost:${PORT}/graphql`
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

// Call the start server function
startServer();
