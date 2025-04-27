import React, { useState, useEffect } from 'react'; 
import { NavLink, useLocation } from 'react-router-dom'; 

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation(); 

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    useEffect(() => {
        closeMobileMenu(); 
    }, [location]); 

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            isActive
                ? 'text-accent border-b-2 border-accent' // Desktop active style
                : 'text-primary hover:text-secondary hover:bg-sky-blue/50' // Desktop inactive style
        }`;

    const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${ // Increased padding slightly
            isActive
                ? 'bg-secondary text-white' // Mobile active style
                : 'text-primary hover:text-secondary hover:bg-sky-blue/50' // Mobile inactive style
        }`;

    return (
        <header className="relative sticky top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo/Name */}
                <div className="flex-shrink-0">
                    {/* Clicking logo also closes mobile menu */}
                    <NavLink to="/" className="text-xl font-bold text-primary hover:text-secondary" onClick={closeMobileMenu}>
                        Keuri Castillo
                    </NavLink>
                </div>

                <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
                        <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
                        <NavLink to="/portfolio" className={getNavLinkClass}>Portfolio</NavLink>
                        <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
                    </div>
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen} // Dynamically set based on state
                        aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
                    >
                        <span className="sr-only">Open main menu</span>
                        {!isMobileMenuOpen ? (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 transition-all duration-300 ease-in-out overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3"> 
                    <NavLink to="/" className={getMobileNavLinkClass} onClick={closeMobileMenu} end>Home</NavLink>
                    <NavLink to="/about" className={getMobileNavLinkClass} onClick={closeMobileMenu}>About</NavLink>
                    <NavLink to="/portfolio" className={getMobileNavLinkClass} onClick={closeMobileMenu}>Portfolio</NavLink>
                    <NavLink to="/contact" className={getMobileNavLinkClass} onClick={closeMobileMenu}>Contact</NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;