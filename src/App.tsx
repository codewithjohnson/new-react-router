/* eslint-disable react-refresh/only-export-components */
import { Outlet, Link, useLoaderData } from "react-router-dom";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodoData(): Promise<Todo | undefined> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/20");
    const data: Todo = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

const Links = [
  {
    to: "/react-query",
    label: "React Query",
  },
  {
    to: "/react-router",
    label: "React Router",
  },
];

const App = () => {
  const Todo = useLoaderData();
  console.log(Todo);
  return (
    <div>
      <header className="text-gray-500">
        <nav className="flex justify-center space-x-4">
          {Links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
