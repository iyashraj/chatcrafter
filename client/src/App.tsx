import { useEffect, useState } from "react";
import Navbar from "./components/navbar";

function App() {
  const [theme, setTheme] = useState<string>("light")
  // useEffect(():void=>{
  //   if(theme === "dark"){
  //     document.documentElement.classList.add("dark")
  //   }else{
  //     document.documentElement.classList.remove("dark")
  //   }
  // },[theme])
  const themeChangeHandler = ():void => {
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
    </div>
    </>
  );
}

export default App;
