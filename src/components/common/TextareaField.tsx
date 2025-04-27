import React, { forwardRef } from 'react';

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    hasError?: boolean;
}

const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
    ({ className = '', hasError, ...props }, ref) => {
        const baseClasses = "mt-1 block w-full rounded-md shadow-sm border transition duration-150 ease-in-out";
         const borderClasses = hasError
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:border-secondary focus:ring-secondary';
        const focusClasses = 'focus:ring focus:ring-opacity-40 focus:bg-sky-blue/10';

        return (
            <textarea
                ref={ref}
                className={`${baseClasses} ${borderClasses} ${focusClasses} ${className}`}
                aria-invalid={hasError} // Add aria-invalid for accessibility
                {...props}
            />
        );
    }
);
TextareaField.displayName = 'TextareaField';
export default TextareaField;