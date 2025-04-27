import React from 'react';
import { Link } from 'react-router-dom';

// Define in src/types/index.ts
export interface PortfolioItem {
    id: string;
    title: string;
    slug: string; // for URL: /portfolio/project-slug
    imageUrl: string;
    shortDescription: string;
    tags: string[];
}

interface PortfolioCardProps {
    project: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
    return (
        <Link to={`/portfolio/${project.slug}`} className="group block">
            <article className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl border border-transparent hover:border-light-blue">
                <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 text-primary group-hover:text-secondary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium bg-sky-blue text-secondary px-2 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default PortfolioCard;