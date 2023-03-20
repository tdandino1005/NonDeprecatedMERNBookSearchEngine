import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
