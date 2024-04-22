<div align="center">

<img alt="GraphQL Logo" src="https://graphql.org/img/logo.svg" width="15%" />

</div>

# GraphQL Todo App

This repository serves as a learning project for implementing GraphQL in a full-stack application. It fetches Todos from JSONPlaceholder and displays them using GraphQL queries. The backend is built with ApolloServer and Express.js, while the frontend is developed using React.js with Apollo Client.



## Backend

The backend is created with Express.js in TypeScript, utilizing ApolloServer for implementing GraphQL. It defines a schema with types for `User` and `Todo`, along with corresponding queries to fetch todos and users from JSONPlaceholder API.

### Technologies Used:
- ApolloServer
- Express.js
- GraphQL
- TypeScript

#### Backend Overview:

The backend code defines a GraphQL schema with types for `User` and `Todo`, along with queries to fetch data from JSONPlaceholder API. Express.js is used to create the server.

#### Backend Endpoint:
- `GET /graphql`: The GraphQL endpoint for querying todos and users.

## Frontend

The frontend is developed using React.js with Vite for project setup and Apollo Client for GraphQL integration. It fetches todos and displays them along with the user they are assigned to.

### Technologies Used:
- React.js
- Vite
- Apollo Client

#### Frontend Overview:

The frontend code fetches todos using Apollo Client and displays them in a list along with their completion status and the user they are assigned to.

#### Frontend Components:
- `App`: The main component of the application responsible for fetching todos and rendering them in a list.

#### Frontend GraphQL Query:
```typescript
const query = gql`
  query GetTodosWithUsers {
    getTodos{
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;
```

## Setup

1. Clone the repository `git clone https://github.com/dipesh2508/graphql-learn`.
2. Navigate to the project directory.
3. Install dependencies for both frontend and backend using `bun install`.
4. Start the backend server using `bun --watch run index.ts`.
5. Start the frontend server using `bun run dev`.
6. Visit `http://localhost:5173` in your browser to view the application.

## Testing

You can test the GraphQL queries using tools like Apollo Studio. The backend server runs on `http://localhost:8000/graphql`. You can send queries to this endpoint to fetch todos and users.
