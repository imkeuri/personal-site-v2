import React from 'react';
import Layout from '../components/layout/Layout';
import HeadManager from '../components/seo/HeadManager';
import SectionWrapper from '../components/layout/SectionWrapper';

const AboutPage: React.FC = () => {
    return (
        <Layout>
            <HeadManager
                title="About Me"
                description="Learn more about my background, experience, and skills as a Software Developer."
            />
            <SectionWrapper>
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
                        About Me
                    </h1>

                    {/* Add Intro Section */}
                    <section className="mb-12">
                         <h2 className="text-2xl font-semibold mb-4 text-secondary">My Journey</h2>
                         <p className="text-lg leading-relaxed text-gray-700">
                             Placeholder for your professional story, passion for development, etc.
                             Talk about how you got started and what drives you.
                         </p>
                    </section>

                    {/* Add Experience Section */}
                     <section className="mb-12">
                         <h2 className="text-2xl font-semibold mb-4 text-secondary">Experience & Skills</h2>
                         <p className="text-lg leading-relaxed text-gray-700">
                             Placeholder for highlights of your experience, key achievements,
                             and a more detailed breakdown of your technical skills (React, Node, Cloud, Databases, etc.).
                             Maybe use bullet points or categorized lists.
                         </p>
                    </section>

                     {/* Add Philosophy Section */}
                     <section className="mb-12">
                         <h2 className="text-2xl font-semibold mb-4 text-secondary">My Approach</h2>
                         <p className="text-lg leading-relaxed text-gray-700">
                             Placeholder for your approach to software development - clean code, testing, collaboration, user focus, etc.
                         </p>
                    </section>

                     {/* Add Personal Touch (Optional) */}
                     <section>
                         <h2 className="text-2xl font-semibold mb-4 text-secondary">Outside of Code</h2>
                         <p className="text-lg leading-relaxed text-gray-700">
                             Optional: Briefly mention hobbies or interests to add personality.
                         </p>
                    </section>

                    {/* Optional: Add a professional photo */}
                     <div className="my-10 text-center">
                         {/* <img src="/path/to/your-photo.jpg" alt="Your Name" className="w-40 h-40 rounded-full mx-auto shadow-md" /> */}
                         <p className="mt-4 text-gray-600">Placeholder for photo</p>
                     </div>
                </div>
            </SectionWrapper>
        </Layout>
    );
};

export default AboutPage;