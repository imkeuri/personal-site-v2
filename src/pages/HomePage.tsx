import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/common/Button';
import PortfolioCard, { PortfolioItem } from '../components/portfolio/PortfolioCard';
import HeadManager from '../components/seo/HeadManager';
import imageBanner from '../assets/Subject.png'; // Adjust path/name if needed

// Sample data
const featuredProjects: PortfolioItem[] = [
    { id: '1', title: 'Project Alpha', slug: 'project-alpha', imageUrl: 'https://image-placeholder.com/images/actual-size/640x480.png', shortDescription: 'A revolutionary web application using React and Node.js.', tags: ['React', 'Node.js', 'Tailwind CSS'] },
    { id: '2', title: 'Service Beta', slug: 'service-beta', imageUrl: 'https://image-placeholder.com/images/actual-size/640x480.png', shortDescription: 'Scalable microservices architecture for a cloud platform.', tags: ['TypeScript', 'AWS', 'Docker'] },
    { id: '2', title: 'Service Beta', slug: 'service-beta', imageUrl: 'https://image-placeholder.com/images/actual-size/640x480.png', shortDescription: 'Scalable microservices architecture for a cloud platform.', tags: ['TypeScript', 'AWS', 'Docker'] },
];

const HomePage: React.FC = () => {
    const lastSectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [isLastSectionVisible, setIsLastSectionVisible] = useState(false);

    // Using h-screen as chosen previously
    const containerHeightClass = 'h-screen';

    // --- Intersection Observer Logic ---
    useEffect(() => {
        // ... (observer logic remains the same) ...
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsLastSectionVisible(entry.isIntersecting);
            },
            { root: null, rootMargin: '0px', threshold: 0.1, }
        );
        const currentLastSection = lastSectionRef.current;
        if (currentLastSection) {
            observer.observe(currentLastSection);
        }
        return () => {
            if (currentLastSection) {
                observer.unobserve(currentLastSection);
            }
        };
    }, []);

    // --- Click Handler for Arrow ---
    const handleScrollDown = () => {
        // ... (handler remains the same) ...
        if (scrollContainerRef.current) {
            const containerHeight = scrollContainerRef.current.clientHeight;
            scrollContainerRef.current.scrollBy({
                top: containerHeight,
                behavior: 'smooth'
            });
        }
    };

    // --- Arrow Color Logic ---
    const arrowBlendMode = 'mix-blend-difference';

    return (
        <Layout>
            <HeadManager
                title="Keuri Castillo - Experienced Software Developer"
                description="Personal portfolio showcasing software development projects and expertise in React, Node.js, and more."
            />

            <div
                ref={scrollContainerRef}
                className={`snap-y snap-mandatory overflow-y-scroll ${containerHeightClass}`}
            >
                {/* --- Section 1: Hero --- */}
                <section
                    id="hero"
                    // MODIFIED Padding: Added pt-16, adjusted existing p-* to px-* and pb-*
                    className="relative snap-start w-full h-full flex items-center bg-white text-primary px-6 md:px-12 lg:px-16 pb-6 md:pb-12 lg:pb-16 pt-16 overflow-hidden"
                >
                    {/* Content structure remains the same */}
                    <div className="container mx-auto h-full">
                        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8 md:gap-12 lg:gap-16">
                            {/* Left Column */}
                            <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left order-2 md:order-1 relative z-10">
                                <p className="text-sm font-semibold uppercase text-secondary mb-2 tracking-wider"> Senior Fullstack Developer </p>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-primary"> Transforming business ideas into digital realities </h1>
                                <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto md:mx-0"> Dedicated to building intuitive, performant, and user-centric web applications leveraging modern technologies and best practices. </p>
                                <Button href="/portfolio" variant="primary"> View My Work </Button>
                            </div>
                            {/* Right Column */}
                            <div className="w-full md:w-1/2 lg:w-2/5 h-full order-1 md:order-2 flex items-center justify-center md:justify-end relative min-h-[300px] md:min-h-0">
                                {/* Shapes */}
                                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-50 md:opacity-60"> {/* ... splotch svg ... */} <svg viewBox="0 0 500 500" className="w-[140%] h-[140%] text-accent -rotate-12 transform scale-110"> <path fill="currentColor" d="M250 50 C 150 150, 350 150, 400 200 S 450 350, 350 400 S 150 450, 100 350 S 0 150, 250 50 Z" /> </svg> </div>
                                <div className="absolute bottom-[-15%] right-[-15%] md:bottom-[20%] md:right-[-15%] w-60 h-100 lg:w-72 lg:h-72 opacity-40 z-0 "> {/* ... circle svg ... */} <svg viewBox="0 0 100 100" className="w-full h-full text-secondary animate-spin-slow"> <defs> <pattern id="diagLines" patternUnits="userSpaceOnUse" width="10" height="10"> <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="currentColor" strokeWidth="0.5"/> </pattern> </defs> <circle cx="50" cy="50" r="50" fill="url(#diagLines)" /> </svg> </div>
                                {/* Image */}
                                <div className="relative z-10 w-full max-w-[16rem] lg:max-w-[18rem] "> <img src={imageBanner} alt="Your Name - Professional Illustration" className="w-full h-auto object-contain drop-shadow-lg" /> </div>
                            </div>
                        </div>
                    </div>
                     {/* Arrow */}
                    {!isLastSectionVisible && ( <div onClick={handleScrollDown} className={`absolute bottom-5 right-5 z-20 animate-bounce cursor-pointer p-2 rounded-full ${arrowBlendMode}`} title="Scroll to next section" > <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> </svg> </div> )}
                </section>

                {/* --- Section 2: Featured Projects --- */}
                {featuredProjects.length > 0 && (
                    <section
                        id="featured-portfolio"
                         // MODIFIED Padding: Added pt-16, adjusted existing py-* to pb-* and kept px-*
                        className="snap-start w-full min-h-full flex flex-col justify-center bg-white px-4 pb-16 md:pb-20 pt-16"
                    >
                         <div className="container mx-auto"> <h2 className="text-3xl font-bold text-center mb-12 text-primary"> Featured Projects </h2> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {featuredProjects.map((project) => ( <PortfolioCard key={project.id} project={project} /> ))} </div> <div className="text-center mt-12"> <Button href="/portfolio" variant="primary">See All Projects</Button> </div> </div>
                    </section>
                )}

                {/* --- Section 3: Call to Action (Last Section) --- */}
                <section
                    id="home-cta"
                    ref={lastSectionRef}
                     // MODIFIED Padding: Added pt-16, adjusted existing p-* to px-* and pb-*
                    className="snap-start w-full h-full flex flex-col items-center justify-center bg-light-blue px-4 pb-4 pt-16"
                >
                    <div className="text-center"> <h2 className="text-2xl font-semibold mb-4 text-primary">Interested in collaborating?</h2> <p className="mb-6 text-secondary">Let's build something great together.</p> <Button href="/contact" variant="primary">Contact Me</Button> </div>
                </section>
            </div> {/* End Scroll Snap Container */}
        </Layout>
    );
};

export default HomePage;