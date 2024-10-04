export default function Testimonials() {
    return (
        <section className="py-12 bg-purple-100">
            {/* Testimonials Section */}

            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">
                    Client Testimonials
                </h2>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-700 italic">
                                “Berlin Consulting Services made the entire visa process smooth and stress-free.
                                Highly recommend!”
                            </p>
                            <span className="block mt-4 text-purple-700 font-semibold">John Mckinsly</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-4 mb-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <p className="text-gray-700 italic">
                                “Professional, reliable, and results-oriented. Their business registration service was top-notch.”
                            </p>
                            <span className="block mt-4 text-purple-700 font-semibold">Jane Smith</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
