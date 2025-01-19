import { Routes, Route } from "react-router-dom";
import { About, Navbar } from "./components";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Mlops from "./pages/Mlops";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home /> <About />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/mlops" element={<Mlops />} />
      </Routes>
    </div>
  );
}

export default App;
