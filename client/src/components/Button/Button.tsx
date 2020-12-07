import React from 'react';

export type ButtonProps = {
  children: string;
  color: string;
};

function Button({ children, color }: ButtonProps) {
  return (
    <button style={{ backgroundColor: color === 'primary' ? 'pink' : 'tan' }}>
      {children}
    </button>
  );
}

export default Button;
