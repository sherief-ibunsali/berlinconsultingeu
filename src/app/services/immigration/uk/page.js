"use client";

export default function UKImmigration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Immigration to the United Kingdom</h1>

      {/* Types of Visas */}
      <h2 className="text-3xl font-semibold mb-4">Types of Visas and Permits</h2>

      <div className="space-y-8">
        {/* Work Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">1. Skilled Worker Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For individuals with a job offer from a UK employer.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A job offer from an approved UK employer.</li>
            <li>Meeting the minimum salary threshold (usually £26,200).</li>
            <li>Proficiency in English (B1 level or higher).</li>
          </ul>
        </div>

        {/* Student Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">2. Student Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For international students wishing to study in the UK.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Acceptance into a UK educational institution.</li>
            <li>Proof of sufficient funds to cover tuition and living expenses.</li>
            <li>English language proficiency.</li>
          </ul>
        </div>

        {/* Family Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">3. Family Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For family members of individuals residing in the UK.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Proof of relationship (spouse, child).</li>
            <li>Meeting financial requirements.</li>
            <li>English language proficiency (if applicable).</li>
          </ul>
        </div>

        {/* Innovator Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">4. Innovator Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For experienced business people seeking to establish a business in the UK.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A minimum investment of £50,000.</li>
            <li>An innovative business idea endorsed by an approved body.</li>
          </ul>
        </div>

        {/* Start-up Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">5. Start-up Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For entrepreneurs starting their first business in the UK.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>An innovative, viable business idea endorsed by an approved body.</li>
            <li>No minimum investment requirement.</li>
          </ul>
        </div>
      </div>

      {/* Immigration Process */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Immigration Process</h2>
      <ol className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
        <li>
          <strong>Identify Visa Type:</strong> Choose the appropriate visa for your situation.
        </li>
        <li>
          <strong>Gather Required Documents:</strong> Collect necessary documents for your application.
        </li>
        <li>
          <strong>Submit Application:</strong> Apply online or at a visa application center.
        </li>
        <li>
          <strong>Attend Biometric Appointment:</strong> Provide biometric information if required.
        </li>
        <li>
          <strong>Receive Decision:</strong> Wait for the decision on your application.
        </li>
      </ol>

      {/* Key Considerations */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Key Considerations</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Understanding UK immigration policies is essential for a successful application.</li>
        <li>Maintaining legal status is crucial while in the UK.</li>
        <li>Health insurance is recommended for non-UK residents.</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Conclusion</h2>
      <p className="text-lg text-gray-700">
        The UK provides a variety of immigration options that cater to diverse needs, including work, study, and family connections.
      </p>
    </div>
  );
}
