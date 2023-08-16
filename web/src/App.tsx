import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './components/HomeScreen/HomeScreen'

import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Login } from './components/Login/Login'
import { Contacts } from './pages/Contacts/Contacts'

import { UserStorage } from './context/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartPage } from './pages/CartPage'

export function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/home/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/contato/" element={<Contacts />} />
            <Route path="/meusprodutos/" element={<CartPage />} />
          </Route>
        </Routes>
      </UserStorage>
    </BrowserRouter>
  )
}
