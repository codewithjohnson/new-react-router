import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { getTodoData } from "./App.tsx";
import "./index.css";
import Notfound from "./components/notFound.tsx";
import UsersRQ from "./components/usersRQ.tsx";
import UsersRR, { getTodoDataRR } from "./components/usersRR.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
    loader: getTodoData,
    children: [
      {
        path: "/react-query",
        element: <UsersRQ />,
      },
      {
        path: "/react-router",
        element: <UsersRR />,
        loader: getTodoDataRR,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
