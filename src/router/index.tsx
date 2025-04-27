import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/HomePage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const PortfolioPage = lazy(() => import('../pages/PortfolioPage'));
const PortfolioDetailPage = lazy(() => import('../pages/PortfolioDetailPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
// Add a NotFoundPage component later
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

// Basic loading fallback
const LoadingFallback: React.FC = () => (
    <div className="flex justify-center items-center h-screen">Loading...</div>
);

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingFallback />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} /> {/* Detail page */}
                    <Route path="/contact" element={<ContactPage />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;