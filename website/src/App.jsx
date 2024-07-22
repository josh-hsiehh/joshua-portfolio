import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { More, Home, About } from "./pages";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<More />} />
        
        
      </Routes>
      
  </div>
  );
}

export default App;
