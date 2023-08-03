import { Outlet } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
