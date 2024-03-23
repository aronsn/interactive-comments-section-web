import React from 'react';
import './Button.css';

export function Button({ className, iconSvg, placeholder, onClick }) {
  return (
    <button onClick={onClick} className={`button ${className ?? ''}`}>
      {iconSvg}
      {placeholder}
    </button>
  );
}
