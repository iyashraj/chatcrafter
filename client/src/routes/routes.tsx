import Login from "../pages/login";
import Signup from "../pages/signup";

const appRoutes = [
  { id: 1, path: "/", element: <Login /> },
  { id: 1, path: "/login", element: <Login /> },
  { id: 1, path: "/signup", element: <Signup /> },
];
export { appRoutes };