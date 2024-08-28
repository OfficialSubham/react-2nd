import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform";
import { useState } from "react";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {

  const [theme, setTheme] = useState("dark");
  const [style, setStyle] = useState({
    background: "#121212",
    color: "#ffffff",
  });

  const [aboutStyle, setAboutStyle] = useState(style)

  document.body.style.backgroundColor = style.background
  document.body.style.color = style.color


  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
      
    } else {
      setTheme("dark");
    }
    changeStyle();
  }

  function changeStyle() {
    if (theme === "dark") {
      setStyle({
        background: "#ffffff",
        color: "#000000",
      });
      setAboutStyle({
        background: "#ffffff",
        color: "#000000",
      });
    } else {
      setStyle({
        background: "#121212",
        color: "#ffffff",
      });
      setAboutStyle({
        background: "#121212",
        color: "#ffffff",
      });
    }
    
  }

  function changeAboutStyle () {
    if(aboutStyle.color === "#000000") {
      setAboutStyle({
        background: "#000000",
        color: "#ffffff",
      })
    }
    else {
      setAboutStyle({
        background: "#cccccc",
        color: "#000000",
      })
    }
  }



  return (
    // <>
    //   <Router>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/navbar" element={<Navbar />} />
    //       <Route
    //         path="/about"
    //         element={
    //           <div className="container">
    //             <About />
    //           </div>
    //         }
    //       />
    //       <Route
    //         path="/"
    //         element={
    //           <div className="container">
    //             <Textform />
    //             {/* <Textform /> */}
    //           </div>
    //         }
    //       />
    //     </Routes>
    //   </Router>
    // </>
    //Above is for using Router in React
    <>
      <Navbar changeTheme={changeTheme} theme={theme} changeStyle={changeStyle} style={style}/>
      <div className="container">
        <Textform style={style}/>
        <About style={aboutStyle} setStyle={setStyle} theme={theme} changeAboutStyle={changeAboutStyle}/>
      </div>
    </>
  );
}

export default App;
