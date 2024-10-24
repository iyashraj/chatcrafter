import { ReactNode } from "react";
import { appRoutes } from "./routes";
import { Route } from "react-router-dom";
import ProtectedRoute from "./protectedRoutes";

const renderRoutes = (isSignin: boolean): ReactNode => {
  return appRoutes.map((route) => (
    <Route
      path={route.path}
      element={
        route.protected ? (
          <ProtectedRoute isSignin={isSignin} childern={route.element} />
        ) : (
          route.element
        )
      }
      key={route.id}
    />
  ));
};

export default renderRoutes;
