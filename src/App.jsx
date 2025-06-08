import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </Router>
  );
}
