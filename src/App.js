import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar />
     
  

      <div className="container">
        <Textform />
      </div>

      <div className="container">
        <About
        // changeMode={changeMode}
        // style={aboutStyle}
        // setStyle={setAboutStyle}
        />
      </div>

    </>
    
  );
}

export default App;