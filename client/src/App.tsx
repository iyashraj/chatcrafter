import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { appRoutes } from "./routes/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const renderRoutes = ():React.ReactNode => {
  return appRoutes?.map((route) => {
    return <Route path={route.path} element={route.element} key={route.id} />;
  });
};

function App() {
  const [theme, setTheme] = useState<string>("light")
  const themeChangeHandler = (): void => {
    if(theme === "dark"){
      setTheme("light")
      document.documentElement.classList.remove("dark")
    }else{
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }

  return (
    <>
    <div className="dark:bg-red-700 ">
      <Navbar />
      <BrowserRouter>
        <Routes>{renderRoutes()}</Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
