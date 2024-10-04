import React from 'react';

export default function page() {
    return (
        <div>
            <section section className="py-12" >
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-purple-900 mb-8 text-center">
                        Our Services
                    </h2>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-purple-50">
                                <h3 className="text-2xl font-semibold text-purple-700 mb-4">Migration Consulting</h3>
                                <p className="text-gray-700">Get expert advice on migration and visa applications for Germany.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-purple-50">
                                <h3 className="text-2xl font-semibold text-purple-700 mb-4">Business Registration</h3>
                                <p className="text-gray-700">Start your business with our hassle-free business registration services.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="p-6 bg-white rounded-lg shadow-lg hover:bg-purple-50">
                                <h3 className="text-2xl font-semibold text-purple-700 mb-4">Visa & Work Permits</h3>
                                <p className="text-gray-700">We assist in obtaining work permits and various types of visas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    );
}
