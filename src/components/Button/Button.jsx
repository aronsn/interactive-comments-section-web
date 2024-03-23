import React from 'react';
import './Button.css';

export function Button({ children, className, iconSvg, onClick, type }) {
  const checkType = type === 'icon-button' ? 'icon' : null || type === 'box-button' ? 'box' : null;
  return (
    <button onClick={onClick ? onClick : null} className={`${checkType} ${className ? className : ''}`}>
      {iconSvg ? iconSvg : null}
      {children}
    </button>
  );
}
