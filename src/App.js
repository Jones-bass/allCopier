import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserStorage } from "./UserContext";
import { Provider } from "react-redux";
import Contacts from "./pages/Contacts/Contacts";

import { Home } from "./pages/Home/Home";

import HomePage from "./pages/HomePage/HomePage";
import Login from "./Components/Login/Login";
import CartDetail from "./pages/cartDetail/CartDetail";

import store from "./store";
import "./App.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <UserStorage>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/home/" element={<HomePage />} />
              <Route path="/contacts/" element={<Contacts />} />
              <Route path="/cartdetail/" element={<CartDetail />} />
            </Routes>
          </UserStorage>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
