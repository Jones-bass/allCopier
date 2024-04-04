import { BrowserRouter } from 'react-router-dom'

import { UserStorage } from './context/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Router } from './Router'
import { useEffect, useState } from 'react'
import { LogoLoading } from './components/LogoLoading'

export function App() {
  const [isLogoLoading, setIsLogoLoading] = useState(true)

  useEffect(() => {
    const timingDelayInSeconds = 1000 * 4

    const delay = setTimeout(() => {
      setIsLogoLoading(false)
    }, timingDelayInSeconds)

    return () => {
      clearTimeout(delay)
    }
  }, [])

  return (
    <BrowserRouter>
      {isLogoLoading ? (
        <LogoLoading />
      ) : (
        <>
          <UserStorage>
            <ToastContainer />
            <Router />
          </UserStorage>
        </>
      )}
    </BrowserRouter>
  )
}
