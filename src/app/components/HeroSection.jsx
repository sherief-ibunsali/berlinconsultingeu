import Image from 'next/image'; // Optional: Use Next.js Image optimization

export default function HeroSection() {
    return (
        <section className="relative bg-purple-900 h-screen flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Replace with a proper Image URL */}
                <img
                    src="/hero-bg-placeholder.jpg"
                    alt="Berlin Consulting Services"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    Welcome to Berlin Consulting Services
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
                    Your trusted partner for migration services, business registration, and visa consulting in Germany.
                </p>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                    <a
                        href="/book-appointment"
                        className="bg-emerald-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-emerald-600 transition duration-300 ease-in-out"
                    >
                        Book an Appointment
                    </a>
                    <a
                        href="/contact-us"
                        className="bg-transparent border-2 border-emerald-500 text-emerald-500 py-3 px-6 rounded-lg text-lg hover:bg-emerald-500 hover:text-white transition duration-300 ease-in-out"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}