import React, {useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPassword from './LoginPassword';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
  const { login } = useContext(UserContext);
  if(login === true) return <Navigate to='/visitante' />
  return <div>
    <Routes>
      <Route path="/" element={<LoginForm /> } />
      <Route path="criar" element={<LoginCreate /> } />
      <Route path="perdeu" element={<LoginPassword /> } />
      <Route path="resetar" element={<LoginPasswordReset /> } />
    </Routes>
    </div>;
};

export default Login;
