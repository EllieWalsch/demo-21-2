import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Profiles from "./routes/profiles";
import Thoughts from "./routes/thoughts";

const router = createBrowserRouter([
  {
    path: "/profiles",
    element: <Profiles />,
  },
  {
    path: "/thoughts",
    element: <Thoughts />,
  },
]);

console.log(router);

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
