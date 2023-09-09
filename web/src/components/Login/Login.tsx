import { Route, Routes } from 'react-router-dom'
import { LoginForm } from './LoginForm'
import { LoginPassword } from './LoginPassword'
import { LoginPasswordReset } from './LoginPasswordReset'
import { LoginCreate } from './LoginCreate'

export const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPassword />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}
