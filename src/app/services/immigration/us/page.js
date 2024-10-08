"use client";

export default function USImmigration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Immigration to the United States</h1>

      {/* Types of Visas */}
      <h2 className="text-3xl font-semibold mb-4">Types of Visas and Green Cards</h2>

      <div className="space-y-8">
        {/* Work Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">1. Work Visa (H-1B)</h3>
          <p className="text-lg text-gray-700 mb-2">
            For skilled workers in specialty occupations.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A job offer from a U.S. employer.</li>
            <li>A bachelor&apos;s degree or equivalent in the specialty field.</li>
            <li>Employer sponsorship.</li>
          </ul>
        </div>

        {/* Green Card */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">2. Green Card (Permanent Residence)</h3>
          <p className="text-lg text-gray-700 mb-2">
            For individuals seeking permanent residency in the U.S.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Sponsorship by a U.S. employer or family member.</li>
            <li>Meeting eligibility requirements under employment or family-based categories.</li>
          </ul>
        </div>

        {/* Student Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">3. Student Visa (F-1)</h3>
          <p className="text-lg text-gray-700 mb-2">
            For international students enrolled in an academic program.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Acceptance into a SEVP-approved school.</li>
            <li>Proof of sufficient funds for tuition and living expenses.</li>
            <li>Health insurance coverage.</li>
          </ul>
        </div>

        {/* Family-Based Immigration */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">4. Family-Based Immigration</h3>
          <p className="text-lg text-gray-700 mb-2">
            For family members of U.S. citizens and lawful permanent residents.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Proof of relationship (marriage, parent-child, etc.).</li>
            <li>Sponsorship by a U.S. citizen or permanent resident.</li>
          </ul>
        </div>

        {/* Investment Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">5. Investment Visa (EB-5)</h3>
          <p className="text-lg text-gray-700 mb-2">
            For foreign investors who invest in a U.S. business.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Investment of $1 million (or $500,000 in targeted employment areas).</li>
            <li>Creation of at least 10 full-time jobs for U.S. workers.</li>
          </ul>
        </div>
      </div>

      {/* Immigration Process */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Immigration Process</h2>
      <ol className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
        <li>
          <strong>Research Visa Types:</strong> Determine the appropriate visa for your situation.
        </li>
        <li>
          <strong>Gather Required Documents:</strong> Collect documents necessary for your visa application.
        </li>
        <li>
          <strong>Submit Application:</strong> File your application through the U.S. Citizenship and Immigration Services (USCIS).
        </li>
        <li>
          <strong>Attend Interview:</strong> Participate in an interview if required.
        </li>
        <li>
          <strong>Receive Decision:</strong> Wait for the decision on your application.
        </li>
      </ol>

      {/* Key Considerations */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Key Considerations</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Understanding U.S. immigration laws is crucial for a successful application.</li>
        <li>Maintaining legal status is important while in the U.S.</li>
        <li>Having adequate health insurance is highly recommended.</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Conclusion</h2>
      <p className="text-lg text-gray-700">
        The United States offers a range of immigration options that cater to various needs, including work, study, and family reunification.
      </p>
    </div>
  );
}
