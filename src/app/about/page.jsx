"use client";
import { useState, useEffect } from 'react';

export default function page() {
    const [aboutUsContent, setAboutUsContent] = useState({
        title: 'About Berlin Consulting Services',
        content: `At Berlin Consulting Services, we specialize in providing expert consulting services
    for migration, visa applications, and business registrations in Germany and beyond. Our dedicated team of
    professionals is committed to delivering personalized solutions for individuals and businesses alike.`,
        mission: `Our mission is to simplify the complexities of migration and business establishment processes
    for our clients, ensuring they can focus on building their futures with confidence.`,
        vision: `Our vision is to be the leading consulting service provider in Germany, known for our 
    professionalism, integrity, and results-driven approach.`,
    });

    useEffect(() => {
        // Fetch content dynamically if required
        // Example: You can fetch this data from an API or database
    }, []);

    return (
        <section className="bg-white py-12" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--primary-color)' }}>
                        {aboutUsContent.title}
                    </h2>
                    <p className="mb-4 max-w-4xl mx-auto text-lg">
                        {aboutUsContent.content}
                    </p>
                </div>

                <div className="flex flex-wrap -mx-4 mt-8">
                    {/* Mission Section */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Our Mission</h3>
                            <p>{aboutUsContent.mission}</p>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-color)' }}>Our Vision</h3>
                            <p>{aboutUsContent.vision}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-3xl font-bold" style={{ color: 'var(--primary-color)' }}>Why Choose Us?</h3>
                    <p className="mt-4 max-w-3xl mx-auto text-lg">
                        At Berlin Consulting Services, we take pride in offering tailored solutions to each client.
                        With years of experience in visa and business consulting, we streamline complex processes so
                        you can focus on what truly matters – building your future and your business in Germany.
                    </p>
                </div>
            </div>
        </section>
    );
}