import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/home/Home";
import Projects from "./pages/Projects";
import Mlops from "./pages/Mlops";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/mlops" element={<Mlops />} />
      </Routes>
    </div>
  );
}

export default App;
