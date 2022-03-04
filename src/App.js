import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import './App.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visita/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
