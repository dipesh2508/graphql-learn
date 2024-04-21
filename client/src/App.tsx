import { useState } from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

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

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  user: {
    id: number;
    name: string;
  };
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { loading, error, data } = useQuery(query );

  if (loading) return <p>Loading...</p>;
  if (error) return console.error(error);

  console.log(data)

  const toggleCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <h1>To-do list</h1>
      <ul className="todo-list">
        {data.getTodos.map((todos: Todo) => {
          const handleToggleCompleted = () => toggleCompleted(todos.id);

          return (
            <li className={`todo-item ${todos.completed ? "completed" : ""}`}>
              <input
                type="checkbox"
                checked={todos.completed}
                onChange={handleToggleCompleted}
              />
              <span className="todo-title">{todos.title}</span>
              <span className="todo-user">Assigned to: {todos.user.name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
