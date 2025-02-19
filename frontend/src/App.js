import { Routes, Route } from "react-router-dom";
import { Navbar, FullPageScroll } from "./components";
import Home from "./pages/home/Home";
import Projects from "./pages/Projects";
import Mlops from "./pages/Mlops";

function App() {
  return (
    <div className="App">
      <div>
        <FullPageScroll />
      </div>
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
