import React, { useState } from 'react'; // Import useState
import { useForm, SubmitHandler } from 'react-hook-form';
import Layout from '../components/layout/Layout';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';
import TextareaField from '../components/common/TextareaField';
import Label from '../components/common/Label';
import HeadManager from '../components/seo/HeadManager';
// Assuming you might use icons
// import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

interface IFormInput {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

// Define type for submission status
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  // State for submission status
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setSubmissionStatus('submitting');
    setServerError(null); // Clear previous errors

    console.log('Form data:', data);

    // --- Replace with your actual API call ---
    try {
        // Example: Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Example success condition (replace with actual check)
        const success = true; // Assume success for now

        if (success) {
            setSubmissionStatus('success');
            reset(); // Reset form fields
        } else {
            // Example error handling
            throw new Error("Submission failed. Please try again.");
        }
    } catch (error) {
        console.error("Form submission error:", error);
        setSubmissionStatus('error');
        setServerError(error instanceof Error ? error.message : "An unknown error occurred.");
    }
    // --- End API call replacement ---
  };

  return (
    <Layout>
       <HeadManager
          title="Contact - Your Name"
          description="Get in touch with Your Name to discuss collaborations or ask questions."
       />
      {/* Use SectionWrapper for consistent padding */}
      <SectionWrapper className="bg-white"> {/* Or bg-gray-50 */}
         <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                Let's Connect
            </h1>

            {/* Two Column Layout */}
            <div className="md:grid md:grid-cols-2 md:gap-16 lg:gap-24">

                {/* Left Column: Form */}
                <div className="mb-12 md:mb-0">
                    <h2 className="text-2xl font-semibold text-secondary mb-6">Send a Message</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <Label htmlFor="name">Name <span className="text-red-600">*</span></Label>
                            <InputField
                                id="name"
                                {...register('name', { required: 'Name is required' })}
                                hasError={!!errors.name} // Pass error status
                                aria-describedby={errors.name ? "name-error" : undefined}
                            />
                            {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
                            <InputField
                                id="email"
                                type="email"
                                {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
                                })}
                                hasError={!!errors.email}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Subject Field */}
                        <div>
                            <Label htmlFor="subject">Subject</Label>
                            <InputField id="subject" {...register('subject')} />
                        </div>

                        {/* Message Field */}
                        <div>
                            <Label htmlFor="message">Message <span className="text-red-600">*</span></Label>
                            <TextareaField
                                id="message"
                                rows={5}
                                {...register('message', { required: 'Message is required' })}
                                hasError={!!errors.message}
                                aria-describedby={errors.message ? "message-error" : undefined}
                            />
                            {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
                        </div>

                        {/* Submission Feedback Area */}
                        <div>
                            {submissionStatus === 'success' && (
                                <p className="text-green-600 bg-green-100 p-3 rounded-md text-center">Thank you! Your message has been sent successfully.</p>
                            )}
                            {submissionStatus === 'error' && (
                                <p className="text-red-600 bg-red-100 p-3 rounded-md text-center">
                                    {serverError || "Sorry, something went wrong. Please try again."}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="text-left">
                            <Button type="submit" variant="primary" disabled={submissionStatus === 'submitting'}>
                                {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Contact Info & Visuals */}
                <div className="relative"> {/* Added relative for potential absolute positioned shapes */}
                    <h2 className="text-2xl font-semibold text-secondary mb-6">Contact Information</h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                        Feel free to reach out via email or connect with me on social platforms. I'm always open to discussing new projects or opportunities.
                    </p>

                    <div className="space-y-4 text-gray-700">
                         <a href="mailto:your.email@example.com" className="flex items-center group text-lg hover:text-accent transition-colors">
                            {/* <FaEnvelope className="w-5 h-5 mr-3 text-secondary group-hover:text-accent transition-colors" /> */}
                             <span className="font-medium mr-2">Email:</span> your.email@example.com {/* Replace */}
                         </a>
                         <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center group text-lg hover:text-accent transition-colors">
                             {/* <FaLinkedin className="w-5 h-5 mr-3 text-secondary group-hover:text-accent transition-colors" /> */}
                              <span className="font-medium mr-2">LinkedIn:</span> linkedin.com/in/yourusername {/* Replace */}
                         </a>
                         <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center group text-lg hover:text-accent transition-colors">
                             {/* <FaGithub className="w-5 h-5 mr-3 text-secondary group-hover:text-accent transition-colors" /> */}
                              <span className="font-medium mr-2">GitHub:</span> github.com/yourusername {/* Replace */}
                         </a>
                    </div>

                    {/* Optional: Add a subtle decorative shape */}
                    <div className="absolute -bottom-16 -right-16 w-72 h-72 opacity-15 -z-10 hidden lg:block">
                         <svg viewBox="0 0 100 100" className="w-full h-full text-accent transform rotate-45">
                             {/* Example simple shape */}
                             <rect x="10" y="10" width="80" height="80" rx="15" fill="currentColor" />
                         </svg>
                    </div>

                </div> {/* End Right Column */}

            </div> {/* End Two Column Grid */}
         </div>
      </SectionWrapper>
    </Layout>
  );
};

export default ContactPage;