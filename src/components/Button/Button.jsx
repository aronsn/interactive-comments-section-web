import React from 'react';
import './Button.css';

export function Button({ className, iconSvg, placeholder, type, path }) {
  return (
    <button className={`button ${className ?? ''}`}>
      {iconSvg}
      {placeholder}
    </button>
  );
}
