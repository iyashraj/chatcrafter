import React from "react";
import HomeHeader from "./components/header";
import { BrowserRouter, Routes } from "react-router-dom";
import renderRoutes from "./routes/renderRoutes";

const App: React.FC = () => {
  const isSignin = false;
  return (
    <div className="dark:bg-red-700 ">
      <HomeHeader />
      <BrowserRouter>
        <Routes>{renderRoutes(isSignin)}</Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;