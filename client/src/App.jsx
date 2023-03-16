import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Profiles from "./routes/profiles";
import Thoughts from "./routes/thoughts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profiles",
        element: <Profiles />,
      },
      {
        path: "/thoughts",
        element: <Thoughts />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <nav>
        <ul>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/thoughts">Thoughts</Link>
          </li>
        </ul>
      </nav>
    </RouterProvider>
  );
}
