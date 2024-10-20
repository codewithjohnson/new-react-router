/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { Todo } from "../App";

export async function getTodoDataRR(): Promise<Todo | undefined> {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/5"
    );
    const data: Todo = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

const UsersRR = () => {
  const Todo = useLoaderData();
  console.log(Todo);
  return (
    <div>
      <p>Fetch Data with react router</p>
      <ul>users here</ul>
    </div>
  );
};

export default UsersRR;
