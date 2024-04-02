import { useEffect, useState } from "react";

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
      <p className="text-accent1">Hello, Tailwind CSS! <button onClick={themeChangeHandler}>Change Theme</button></p>
    </div>
    </>
  );
}

export default App;
