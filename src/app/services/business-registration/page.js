"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Ensure the router is only used after the component is mounted
  useEffect(() => {
    setIsMounted(true); // Mark the component as mounted
  }, []);

  // Handle country selection
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);

    if (isMounted && country) {
      // Navigate to the selected country's page
      router.push(`/services/business-registration/${country}`);
    }
  };

  return (
    <div>
      {/* Business Registration Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-900 mb-6">
            Business Registration
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Get started with registering your business in your selected country.
          </p>
          <button className="bg-purple-700 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition duration-200 ease-in-out transform hover:scale-105">
            Start Business Registration
          </button>
        </div>
      </section>

      {/* Country Selection Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Select Your Country
        </h1>

        <div className="max-w-lg mx-auto mb-8">
          <label
            htmlFor="country"
            className="block text-lg font-medium mb-2 text-white-800"
          >
            Choose a country:
          </label>
          <select
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="block w-full p-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a country</option>
            <option value="germany">Germany</option>
            <option value="portugal">Portugal</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
          </select>
        </div>

        <p className="text-center text-gray-600">
          Once you select a country, you&apos;ll be redirected to its dedicated page
          with information and resources for business registration.
        </p>
      </div>
    </div>
  );
}
