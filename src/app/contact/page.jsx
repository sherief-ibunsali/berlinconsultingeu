"use client";

import { useEffect, useState } from "react";

export default function Page() {
    return (
        <div>
            {/* Contact Section */}
            <section className="py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-purple-900 mb-8">Get in Touch</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Contact us today for a consultation on migration, business registration, or visa services.
                    </p>
                    <button className="bg-purple-700 text-white py-3 px-6 rounded-lg hover:bg-purple-600">
                        Contact Us
                    </button>
                    {/* Render form conditionally to avoid SSR mismatch */}
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure form renders only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  if (!isClient) {
    return null; // Prevent rendering during SSR
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-teal-700 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">Contact Us</h1>
        {submitted && (
          <div className="bg-green-600 text-white p-4 mb-4 rounded text-center">
            Thank you for your message! We will get back to you shortly.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-bold text-white mb-2 text-left">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white text-black rounded-lg border border-teal-500 placeholder-teal-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-bold text-white mb-2 text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white text-black rounded-lg border border-teal-500 placeholder-teal-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-bold text-white mb-2 text-left">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 bg-white text-black rounded-lg border border-teal-500 placeholder-teal-300 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              rows="4"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
