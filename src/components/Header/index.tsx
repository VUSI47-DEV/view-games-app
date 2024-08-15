import { useContext, useEffect, useState } from "react";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../../Context/ThemeContext";

const Header = () => {
  // const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, []);

  return (
    <div className="flex items-center p-3">
      <h1 className="3xl font-bold">Logo</h1>
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full ">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          className="bg-transparent outline-none px-2 "
          placeholder="Search games"
        />
      </div>
      <div className="cursor-pointer">
        {theme === "light" ? (
          <HiMoon className="text-[35px] bg-slate-200 text-black rounded-full p-2" onClick={()=>{setTheme('dark'); localStorage.setItem('theme','dark')}} />
        ) : theme === "dark" ? (
          <HiSun className="text-[35px] bg-slate-200 text-black rounded-full p-2" onClick={()=>{setTheme('light'); localStorage.setItem('theme','light')}}/>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
