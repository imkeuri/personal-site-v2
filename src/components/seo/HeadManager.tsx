import React from 'react';
import { Helmet } from 'react-helmet-async'; // Make sure this is installed and compatible!

interface HeadManagerProps {
    title?: string;
    description?: string;
    keywords?: string; // Comma-separated keywords
    imageUrl?: string; // For social sharing (og:image)
    url?: string;      // Canonical URL (og:url)
}

const defaultTitle = "Your Name - Software Developer Portfolio"; // Fallback Title
const defaultDescription = "Personal portfolio showcasing software development projects and skills."; // Fallback Desc

const HeadManager: React.FC<HeadManagerProps> = ({
    title,
    description,
    keywords,
    imageUrl,
    url,
}) => {
    const pageTitle = title ? `${title} | Your Name` : defaultTitle;
    const pageDescription = description || defaultDescription;

    return (
        <Helmet>
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            {url && <meta property="og:url" content={url} />}
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            {imageUrl && <meta property="og:image" content={imageUrl} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            {url && <meta property="twitter:url" content={url} />}
            <meta property="twitter:title" content={pageTitle} />
            <meta property="twitter:description" content={pageDescription} />
            {imageUrl && <meta property="twitter:image" content={imageUrl} />}

            {/* Add more tags as needed - canonical link, etc. */}
            {/* {url && <link rel="canonical" href={url} />} */}

             {/* ** Compatibility Note **
                If react-helmet-async has issues with React 19,
                you might need to use React 19's built-in metadata features
                (<title>, <meta>, <link> directly in your component return)
                or find an alternative compatible library.
             */}
        </Helmet>
    );
};

export default HeadManager;