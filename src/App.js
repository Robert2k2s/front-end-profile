import "./index.scss";
import HomePage from "./component/HomePage/HomePage";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Addproject from "./component/Project/Addproject";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/add-project" element={<Addproject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
