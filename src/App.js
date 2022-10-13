import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserStorage } from "./UserContext";
import { Provider } from "react-redux";
import Contacts from "./pages/Contacts/Contacts";

import { HomeScreen } from "./Components/HomeScreen/HomeScreen";
import { Home } from "./pages/Home/Home";

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
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/home/" element={<Home/>} />
              <Route path="/contact/" element={<Contacts />} />
              <Route path="/myproducts/" element={<CartDetail />} />
            </Routes>
          </UserStorage>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
