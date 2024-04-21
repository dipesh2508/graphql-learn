import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import cors from "cors";

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs: `
        type User {
            id: ID!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
        }

        type Todo {
            id: ID!
            title: String!
            completed: Boolean!
            user: User
        }

        type Query {
            getTodos: [Todo]
            getAllUsers: [User]
            getUserById(id: ID!): User
        }
    `,
    resolvers: {
        Todo: {
            user: (todo) => {
                return fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`, { method: 'GET' }).then(res => res.json());
            }
        },
      Query: {
        getTodos: async () =>
          (fetch('https://jsonplaceholder.typicode.com/todos', { method: 'GET' }).then(res => res.json())),
        getAllUsers: async () =>
            (fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' }).then(res => res.json())),
        getUserById: async (_, { id }) =>
            (fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { method: 'GET' }).then(res => res.json())),
      },
    },
  });

  app.use(bodyParser.json());
  app.use(cors());

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
}

startServer();
