"use client";

export default function PortugalImmigration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Immigration to Portugal</h1>

      {/* Types of Visas */}
      <h2 className="text-3xl font-semibold mb-4">Types of Visas and Residence Permits</h2>

      <div className="space-y-8">
        {/* Work Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">1. Work Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For individuals seeking employment in Portugal.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A valid job offer from a Portuguese employer.</li>
            <li>Proof of qualifications and professional experience.</li>
            <li>Health insurance coverage.</li>
            <li>Proof of sufficient funds to support yourself.</li>
          </ul>
        </div>

        {/* Golden Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">2. Golden Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            A residency-by-investment program for high-net-worth individuals.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Investment of at least €500,000 in real estate.</li>
            <li>Creation of at least 10 jobs in Portugal.</li>
            <li>Proof of clean criminal record.</li>
          </ul>
        </div>

        {/* Student Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">3. Student Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For international students wishing to study in Portugal.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Acceptance letter from a recognized Portuguese institution.</li>
            <li>Proof of sufficient funds to support living expenses.</li>
            <li>Health insurance coverage.</li>
          </ul>
        </div>

        {/* Family Reunion Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">4. Family Reunion Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For family members of individuals legally residing in Portugal.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A legal resident family member in Portugal.</li>
            <li>Proof of adequate living space and financial means.</li>
          </ul>
        </div>

        {/* Self-Employment Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">5. Self-Employment Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For entrepreneurs wishing to establish a business in Portugal.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A viable business plan.</li>
            <li>Proof of adequate funding.</li>
            <li>Business registration in Portugal.</li>
          </ul>
        </div>
      </div>

      {/* Immigration Process */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Immigration Process</h2>
      <ol className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
        <li>
          <strong>Determine Visa Type:</strong> Research and select the appropriate visa category.
        </li>
        <li>
          <strong>Gather Documentation:</strong> Collect necessary documents to support your application.
        </li>
        <li>
          <strong>Submit Application:</strong> Apply at the nearest Portuguese consulate or embassy.
        </li>
        <li>
          <strong>Wait for Processing:</strong> Wait for the decision on your application.
        </li>
        <li>
          <strong>Arrival in Portugal:</strong> Register your residence at the local immigration office.
        </li>
      </ol>

      {/* Key Considerations */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Key Considerations</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Understanding the Portuguese language can be beneficial for integration.</li>
        <li>Health insurance is mandatory for all residents.</li>
        <li>Demonstrating financial stability is crucial for most visa types.</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Conclusion</h2>
      <p className="text-lg text-gray-700">
        Portugal offers diverse immigration options tailored to different needs, making it an attractive destination for work, study, and investment.
      </p>
    </div>
  );
}
