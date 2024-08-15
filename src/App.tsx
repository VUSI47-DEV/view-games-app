import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme || 'dark');
  }, []);

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} ${theme == "dark" ? "bg-[#121212]" : null}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
