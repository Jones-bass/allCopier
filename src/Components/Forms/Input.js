import React from 'react';
import './Input.scss';

const Input = ({ label, type, name, error, value, onChange, onBlur }) => {
  return (
    <div className='wrapper'>
      <label htmlFor={name} className='label'>
        {label}
      </label>
      <input 
      id={name} 
      name={name} 
      className='input' 
      type={type} 
      error={error}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      />
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default Input;
