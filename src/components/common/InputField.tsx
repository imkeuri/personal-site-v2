import React, { forwardRef } from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ className = '', type = 'text', hasError, ...props }, ref) => {
        const baseClasses = "mt-1 block w-full rounded-md shadow-sm border transition duration-150 ease-in-out";
        const borderClasses = hasError
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-secondary focus:ring-secondary';
        const focusClasses = 'focus:ring focus:ring-opacity-40 focus:bg-sky-blue/10';

        return (
            <input
                ref={ref}
                type={type}
                className={`${baseClasses} ${borderClasses} ${focusClasses} ${className}`}
                aria-invalid={hasError} // Add aria-invalid for accessibility
                {...props}
            />
        );
    }
);
InputField.displayName = 'InputField';
export default InputField;