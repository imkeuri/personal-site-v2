import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string; // Allow additional custom classes
    id?: string; // For linking (e.g., #portfolio)
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
    return (
        <section id={id} className={`py-16 md:py-20 px-4 ${className}`}>
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;