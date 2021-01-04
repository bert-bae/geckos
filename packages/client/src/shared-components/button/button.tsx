import React from 'react';

export type ButtonProps = {
  children: string;
  color: string;
};

// TODO: Change this to the actual implementation. Created to test Storybook

function Button({ children, color }: ButtonProps) {
  return (
    <button style={{ backgroundColor: color === 'primary' ? 'pink' : 'tan' }}>
      {children}
    </button>
  );
}

export default Button;
