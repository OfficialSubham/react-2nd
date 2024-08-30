import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform";
import { useState } from "react";
import Alert from './Components/Alert'
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {

  const [theme, setTheme] = useState("dark");
  const [style, setStyle] = useState({
    background: "#121212",
    color: "#ffffff",
  });

  const [aboutStyle, setAboutStyle] = useState(style);

  const [alert, setAlert] = useState(null)

  document.body.style.backgroundColor = style.background
  document.body.style.color = style.color

  // let timeOutId;

  function showAlert(status, message) {
    setAlert({
      status: status,
      message: message
    });
    // if(timeOutId) {
      // clearTimeout(timeOutId);
    // }
    setTimeout(() => {
      setAlert(null)
    }, 1500)
    // console.log(timeOutId); 
  }

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
      showAlert("success", "Theme is set to Light Mode")
    } else {
      setTheme("dark");
      showAlert("success", "Theme is set to Dark Mode")

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
      showAlert("success", "About is set to Dark Mode")
    }
    else {
      setAboutStyle({
        background: "#cccccc",
        color: "#000000",
      })
      showAlert("success", "About is set to Light Mode")
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
      <Navbar changeTheme={changeTheme} theme={theme} changeStyle={changeStyle} style={style} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <div className="container">
        <Textform style={style} showAlert={showAlert}/>
        <About style={aboutStyle} setStyle={setStyle} theme={theme} changeAboutStyle={changeAboutStyle} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
