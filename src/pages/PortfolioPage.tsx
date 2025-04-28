import React, { useState, useEffect, useMemo } from 'react'; // Import useMemo
import Layout from '../components/layout/Layout';
import HeadManager from '../components/seo/HeadManager';
import SectionWrapper from '../components/layout/SectionWrapper';
import PortfolioCard, { PortfolioItem } from '../components/portfolio/PortfolioCard';

// --- Placeholder Data ---
const allProjectsData: PortfolioItem[] = [
    { id: '1', title: 'Project Alpha', slug: 'project-alpha', imageUrl: 'https://image-placeholder.com/images/actual-size/640x480.png', shortDescription: 'A revolutionary web application using React and Node.js. Built with performance in mind.', tags: ['React', 'Node.js', 'Tailwind CSS', 'Web App'], longDescription: "", techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Vite'], },
    { id: '2', title: 'Service Beta', slug: 'service-beta', imageUrl: 'https://image-placeholder.com/images/actual-size/640x480.png', shortDescription: 'Scalable microservices architecture for a cloud platform, focusing on resilience.', tags: ['TypeScript', 'AWS', 'Docker', 'API'], longDescription: "", techStack: ['TypeScript', 'Node.js', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Docker'], },
    { id: '3', title: 'Gamma Platform', slug: 'gamma-platform', imageUrl: 'https://image-placeholder.com/images/actual-size/640x480.png', shortDescription: 'An internal tool streamlining company workflows, built with React and Python.', tags: ['React', 'Python', 'Flask', 'Internal Tool'], longDescription: "", techStack: ['React', 'Python', 'Flask', 'PostgreSQL'], },
    { id: '4', title: 'Delta Mobile App', slug: 'delta-mobile-app', imageUrl: 'https://image-placeholder.com/images/actual-size/640x480.png', shortDescription: 'Cross-platform mobile app for task management.', tags: ['React Native', 'Firebase', 'Mobile App', 'React'],  longDescription: "", techStack: ['React', 'Python', 'Flask', 'PostgreSQL']}, // Added React tag here for example
    // Add more projects
];
// -----------------------

const PortfolioPage: React.FC = () => {
    // State for all projects (fetched/static)
    const [projects, setProjects] = useState<PortfolioItem[]>([]);
    // State for unique tags derived from projects
    const [allTags, setAllTags] = useState<string[]>([]);
    // State for the currently active filter tag ('All' initially)
    const [activeFilter, setActiveFilter] = useState<string>('All');
    // State for loading (if fetching async)
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // Effect to simulate fetching data and derive tags
    useEffect(() => {
        setIsLoading(true);
        // Simulate fetching data (replace with actual fetch)
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
            setProjects(allProjectsData); // Set fetched projects

            // Derive unique tags from the fetched data
            const uniqueTags = Array.from(new Set(allProjectsData.flatMap(p => p.tags)));
            setAllTags(uniqueTags.sort()); // Sort tags alphabetically

            setIsLoading(false); // Set loading to false
        };

        fetchData();

        // Replace with actual API call:
        // fetch('/api/projects')
        //   .then(res => res.json())
        //   .then((data: PortfolioItem[]) => {
        //       setProjects(data);
        //       const uniqueTags = Array.from(new Set(data.flatMap(p => p.tags)));
        //       setAllTags(uniqueTags.sort());
        //       setIsLoading(false);
        //    })
        //   .catch(error => {
        //       console.error("Error fetching projects:", error);
        //       setIsLoading(false); // Stop loading even on error
        //    });
    }, []); // Empty dependency array runs once on mount

    // Memoize the filtered projects based on the active filter
    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return projects; // Show all if 'All' is selected
        }
        // Filter projects where the tags array includes the activeFilter
        return projects.filter(project => project.tags.includes(activeFilter));
    }, [projects, activeFilter]); // Recalculate only when projects or activeFilter changes

    // Handler for clicking a filter button
    const handleFilterClick = (tag: string) => {
        setActiveFilter(tag);
    };

    // --- Button Styling ---
    const baseButtonClass = "px-4 py-1.5 rounded-full text-sm font-medium border transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-secondary";
    const inactiveButtonClass = "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";
    const activeButtonClass = "bg-secondary border-secondary text-white";
    // --------------------

    return (
        <Layout>
            <HeadManager
                title="Portfolio"
                description="Explore a selection of my software development projects, showcasing skills in various technologies."
            />
            <SectionWrapper className="bg-gray-50"> {/* Example slightly different background */}
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
                    My Work
                </h1>

                {/* --- Filtering UI --- */}
                {/* Only show filters if there are projects and tags */}
                {!isLoading && projects.length > 0 && (
                    <div className="mb-12 flex flex-wrap justify-center gap-3">
                        {/* "All" Button */}
                        <button
                            onClick={() => handleFilterClick('All')}
                            className={`${baseButtonClass} ${activeFilter === 'All' ? activeButtonClass : inactiveButtonClass}`}
                            disabled={isLoading} // Disable while loading
                        >
                            All
                        </button>
                        {/* Tag Buttons */}
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => handleFilterClick(tag)}
                                className={`${baseButtonClass} ${activeFilter === tag ? activeButtonClass : inactiveButtonClass}`}
                                disabled={isLoading} // Disable while loading
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                )}

                {/* --- Project Grid --- */}
                {isLoading ? (
                    <p className="text-center text-gray-600">Loading projects...</p>
                ) : filteredProjects.length === 0 ? (
                     // Show message if filters result in no projects
                    <p className="text-center text-gray-600">No projects found matching the filter "{activeFilter}".</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {/* Map over FILTERED projects */}
                        {filteredProjects.map((project) => (
                            <PortfolioCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </SectionWrapper>
        </Layout>
    );
};

export default PortfolioPage;