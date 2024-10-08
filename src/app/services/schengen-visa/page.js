import React from "react";

export default function page() {
  return (
    <div>
      {/* Schengen Visa Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-purple-900 mb-8">
            Schengen Visa
          </h2>
          <p className="text-lg text-gray-700 mb-4">Schengen Visa</p>
          <button className="bg-purple-700 text-white py-3 px-6 rounded-lg hover:bg-purple-600">
            Schengen Visa
          </button>
          <SchengenVisa />
        </div>
      </section>
    </div>
  );
}

function SchengenVisa() {
  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <h1 className="text-4xl font-bold mb-6">Schengen Visa Information</h1>

      <p className="text-lg text-gray-700 mb-4">
        The Schengen Visa allows individuals to travel freely within the 26
        European countries that make up the Schengen Area. This visa is commonly
        used for tourism, business, or short-term family visits. Below are the
        details on applying for a Schengen Visa from the UK, US, Portugal, and
        Germany.
      </p>

      {/* Schengen Visa from the UK */}
      <h2 className="text-3xl font-semibold mb-4">
        1. Schengen Visa from the UK
      </h2>
      <p className="text-lg text-gray-700 mb-2">
        UK citizens do not need a Schengen Visa for short stays in Schengen
        countries (up to 90 days within a 180-day period). However, residents or
        non-UK nationals may need a Schengen Visa depending on their
        nationality.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          <strong>Eligibility:</strong> Non-UK nationals depending on their home
          country&apos;s visa requirements.
        </li>
        <li>
          <strong>Application Process:</strong> Submit the visa application to
          the embassy of the Schengen country you will spend the most time in.
        </li>
        <li>
          <strong>Required Documents:</strong> Passport, proof of accommodation,
          travel itinerary, travel insurance, and proof of financial means.
        </li>
        <li>
          <strong>Processing Time:</strong> Usually 10-15 days.
        </li>
      </ul>

      {/* Schengen Visa from the US */}
      <h2 className="text-3xl font-semibold mb-4">
        2. Schengen Visa from the US
      </h2>
      <p className="text-lg text-gray-700 mb-2">
        US citizens can travel to Schengen Area countries without a visa for up
        to 90 days within a 180-day period. Non-US nationals living in the US
        may need to apply for a Schengen Visa.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          <strong>Eligibility:</strong> Non-US nationals depending on their home
          country&apos;s visa requirements.
        </li>
        <li>
          <strong>Application Process:</strong> Submit the visa application to
          the consulate or embassy of the main Schengen country you plan to
          visit.
        </li>
        <li>
          <strong>Required Documents:</strong> Passport, proof of residency in
          the US, travel insurance, accommodation details, and proof of funds.
        </li>
        <li>
          <strong>Processing Time:</strong> 15 days, with possible extensions if
          needed.
        </li>
      </ul>

      {/* Schengen Visa from Portugal */}
      <h2 className="text-3xl font-semibold mb-4">
        3. Schengen Visa from Portugal
      </h2>
      <p className="text-lg text-gray-700 mb-2">
        Portugal is a part of the Schengen Area, so residents of Portugal do not
        need a separate visa to travel within other Schengen countries for short
        stays. For non-residents, a Schengen Visa may be required depending on
        their nationality.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          <strong>Eligibility:</strong> Non-EU residents or third-country
          nationals living in Portugal.
        </li>
        <li>
          <strong>Application Process:</strong> Submit the application to the
          relevant Schengen country embassy or consulate in Portugal.
        </li>
        <li>
          <strong>Required Documents:</strong> Passport, proof of residency,
          travel insurance, travel plans, and proof of financial resources.
        </li>
        <li>
          <strong>Processing Time:</strong> Between 15-30 days.
        </li>
      </ul>

      {/* Schengen Visa from Germany */}
      <h2 className="text-3xl font-semibold mb-4">
        4. Schengen Visa from Germany
      </h2>
      <p className="text-lg text-gray-700 mb-2">
        As part of the Schengen Area, Germany allows its residents to travel
        freely within the Schengen zone. However, non-EU nationals residing in
        Germany may need a visa to travel to other Schengen countries.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          <strong>Eligibility:</strong> Non-EU nationals or third-country
          nationals living in Germany.
        </li>
        <li>
          <strong>Application Process:</strong> Submit your visa application at
          the relevant consulate or embassy of the country you will spend the
          most time in.
        </li>
        <li>
          <strong>Required Documents:</strong> Valid passport, proof of
          residency, travel insurance, itinerary, and financial proof.
        </li>
        <li>
          <strong>Processing Time:</strong> Typically 10-15 days, but can take
          longer during peak travel seasons.
        </li>
      </ul>
    </div>
  );
}
