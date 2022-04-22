import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import HomePage from "./pages/HomePage";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import './App.scss';


function App() {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/home/" element={<HomePage />} />
        </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
