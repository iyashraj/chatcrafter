import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Signup from "../pages/signup";

export interface AppRoute {
  id: number;
  path: string;
  element: React.ReactNode;
  protected: boolean;
}


const appRoutes: AppRoute[] = [
  { id: 1, path: "/", element: <Login />, protected: false },
  { id: 2, path: "/login", element: <Login />, protected: false },
  { id: 3, path: "/signup", element: <Signup />, protected: false },
  { id: 4, path: "/dashboard", element: <Dashboard />, protected: true }, // Protected route
];

export { appRoutes };