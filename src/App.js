import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";
import './App.css';
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/home/" element={<HomePage />} />
          <Route path="/contacts/" element={<Contacts />} />
        </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
