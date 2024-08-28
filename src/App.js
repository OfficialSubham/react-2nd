import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Textform from "./Components/Textform";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route
            path="/about"
            element={
              <div className="container">
                <About />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="container">
                <Textform />
                {/* <Textform /> */}
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
