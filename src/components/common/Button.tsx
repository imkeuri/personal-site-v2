import React from 'react';
import { Link } from 'react-router-dom'; // Optional: for internal links

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string; // If used as a link
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyle = "inline-block px-6 py-2.5 rounded font-medium text-sm leading-tight uppercase shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-secondary text-white hover:bg-accent hover:shadow-lg focus:bg-accent focus:shadow-lg active:bg-primary active:shadow-lg',
    secondary: 'bg-accent text-white hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg active:bg-secondary active:shadow-lg',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:bg-opacity-10 focus:bg-secondary focus:bg-opacity-10 active:bg-secondary active:bg-opacity-20',
  };

  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} className={combinedClassName} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    } else {
      return (
        <Link to={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button type="button" className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;