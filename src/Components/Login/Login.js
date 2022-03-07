import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPassword from './LoginPassword';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => {
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
