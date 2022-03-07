import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import HomePage from "./pages/HomePage";
import Login from "./Components/Login/Login";
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/visitante/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
