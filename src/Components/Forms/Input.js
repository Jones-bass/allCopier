import React from 'react';
import input from './input.module.css';

const Input = ({ label, type, name, error, value, onChange, onBlur }) => {
  return (
    <div className={input.wrapper}>
      <label htmlFor={name} className='label'>
        {label}
      </label>
      <input 
      id={name} 
      name={name} 
      className={input.input} 
      type={type} 
      error={error}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      />
      {error && <p className={input.error}>{error}</p>}
    </div>
  );
};

export default Input;
