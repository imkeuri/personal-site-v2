import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // To get the slug from URL
import Layout from '../components/layout/Layout';
import HeadManager from '../components/seo/HeadManager';
import SectionWrapper from '../components/layout/SectionWrapper';
import { PortfolioItem } from '../components/portfolio/PortfolioCard'; // Assuming type exists
import Button from '../components/common/Button'; // For links

 // --- Placeholder Data ---
// In a real app, fetch this from an API based on the slug
// This is just for demonstration
const allProjectsData: PortfolioDetailItem[] = [
     { id: '1', title: 'Project Alpha', slug: 'project-alpha', imageUrl: 'https://via.placeholder.com/800x400/133c55/91e5f6?text=Project+Alpha+Detail', shortDescription: 'A revolutionary web application using React and Node.js. Built with performance in mind.', tags: ['React', 'Node.js', 'Tailwind CSS', 'Web App'], longDescription: 'Detailed description about the challenges, my role, the solution implemented for Project Alpha...', techStack: ['React 18', 'Node.js (Express)', 'PostgreSQL', 'Tailwind CSS', 'Vite'], liveUrl: '#', repoUrl: '#' },
     { id: '2', title: 'Service Beta', slug: 'service-beta', imageUrl: 'https://via.placeholder.com/800x400/386FA4/FFFFFF?text=Service+Beta+Detail', shortDescription: 'Scalable microservices architecture for a cloud platform, focusing on resilience.', tags: ['TypeScript', 'AWS', 'Docker', 'API'], longDescription: 'Deep dive into the microservices architecture, AWS services used, and how we ensured scalability and resilience for Service Beta.', techStack: ['TypeScript', 'Node.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Docker'], liveUrl: null, repoUrl: '#' },
    // Add detailed data for other projects
];
// Extend PortfolioItem type or create a new one for detailed view
interface PortfolioDetailItem extends PortfolioItem {
    liveUrl?: string | null;
    repoUrl?: string | null;
    // Add more fields like challenges, results, screenshots etc.
}
// -----------------------


const PortfolioDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>(); // Get slug from router
    const [project, setProject] = useState<PortfolioDetailItem | null | undefined>(undefined); // undefined: loading, null: not found

    useEffect(() => {
        // Simulate fetching data based on slug
        const foundProject = allProjectsData.find(p => p.slug === slug) as PortfolioDetailItem | undefined; // Cast needed if adding detailed fields
        // Replace with actual API call:
        // fetch(`/api/projects/${slug}`)
        //  .then(res => res.ok ? res.json() : Promise.reject('Not found'))
        //  .then(data => setProject(data))
        //  .catch(error => {
        //      console.error("Error fetching project:", error);
        //      setProject(null); // Set to null if not found or error
        //  });

         // Timeout to simulate loading
         const timer = setTimeout(() => {
            setProject(foundProject || null);
         }, 300); // Adjust as needed

        return () => clearTimeout(timer); // Cleanup timer on unmount

    }, [slug]); // Re-run effect if slug changes


    if (project === undefined) {
        return <Layout><SectionWrapper><p className="text-center">Loading project details...</p></SectionWrapper></Layout>;
    }

    if (project === null) {
         return (
            <Layout>
                 <HeadManager title="Project Not Found" />
                 <SectionWrapper className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                    <p className="mb-6">Sorry, the project you are looking for does not exist.</p>
                    <Button href="/portfolio">Back to Portfolio</Button>
                </SectionWrapper>
            </Layout>
         );
    }

    // Project found, render details
    return (
        <Layout>
            <HeadManager
                title={project.title}
                description={project.shortDescription} // Use short desc for meta
                imageUrl={project.imageUrl} // Use main image for social
            />
            <SectionWrapper>
                <article className="max-w-4xl mx-auto">
                    {/* Back Link */}
                     <div className="mb-8">
                         <Link to="/portfolio" className="text-secondary hover:text-accent transition-colors inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Back to Portfolio
                         </Link>
                     </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">{project.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{project.shortDescription}</p>

                    <img
                        src={project.imageUrl} // Use a larger/detailed image if available
                        alt={`${project.title} detail`}
                        className="w-full rounded-lg shadow-md mb-8"
                    />

                     {/* Tags */}
                    <div className="mb-8 flex flex-wrap gap-2">
                         {project.tags.map((tag) => (
                             <span key={tag} className="text-sm font-medium bg-sky-blue text-secondary px-3 py-1 rounded-full">
                                 {tag}
                             </span>
                         ))}
                    </div>

                     {/* Long Description / Case Study Details */}
                     <div className="prose prose-lg max-w-none mb-8"> {/* Use Tailwind Typography plugin for nice text styling */}
                         <h2 className="text-2xl font-semibold text-secondary !mb-3">Project Details</h2> {/* !mb-3 overrides prose*/}
                         <p>{project.longDescription || 'Detailed description coming soon.'}</p>
                         {/* Add sections for Challenges, Solution, Role, Results etc. */}
                     </div>

                     {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                         <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-secondary">Technology Stack</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                {project.techStack.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>
                        </div>
                    )}

                     {/* Links */}
                     <div className="flex space-x-4">
                        {project.liveUrl && (
                            <Button href={project.liveUrl} variant="primary"  rel="noopener noreferrer">
                                Live Demo
                            </Button>
                        )}
                         {project.repoUrl && (
                             <Button href={project.repoUrl} variant="secondary"  rel="noopener noreferrer">
                                 View Code {/* Or GitHub Repo */}
                             </Button>
                         )}
                     </div>

                </article>
            </SectionWrapper>
        </Layout>
    );
};

export default PortfolioDetailPage;