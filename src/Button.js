import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ onClick }) => {
  return (
    <div className='Button'>
    <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Button;
