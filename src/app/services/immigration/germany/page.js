"use client";

export default function GermanyImmigration() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Immigration to Germany</h1>

      {/* Types of Visas */}
      <h2 className="text-3xl font-semibold mb-4">Types of Visas and Residence Permits</h2>

      <div className="space-y-8">
        {/* Work Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">1. Work Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For individuals seeking employment in Germany.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A job offer from a German employer.</li>
            <li>Proof of qualifications (degree, work experience).</li>
            <li>Adequate health insurance coverage.</li>
            <li>Evidence of financial means to support yourself.</li>
          </ul>
        </div>

        {/* EU Blue Card */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">2. EU Blue Card</h3>
          <p className="text-lg text-gray-700 mb-2">
            A residence permit for highly skilled workers from non-EU countries.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A recognized university degree or professional qualification.</li>
            <li>A job offer with a salary above a specific threshold (around €56,400 or €43,992 for shortage occupations in 2024).</li>
            <li>Proof of health insurance.</li>
          </ul>
        </div>

        {/* Student Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">3. Student Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For international students planning to study in Germany.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>Acceptance letter from a recognized German university.</li>
            <li>Proof of sufficient funds to cover living expenses (approximately €11,208 per year).</li>
            <li>Health insurance coverage.</li>
          </ul>
        </div>

        {/* Family Reunion Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">4. Family Reunion Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For family members of individuals already residing in Germany.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A legal resident (spouse, child) in Germany.</li>
            <li>Proof of adequate living space and financial means.</li>
            <li>Knowledge of the German language (A1 level).</li>
          </ul>
        </div>

        {/* Self-Employment Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">5. Self-Employment Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For individuals looking to start their own business in Germany.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A viable business plan.</li>
            <li>Evidence of sufficient funding and experience in the field.</li>
            <li>Positive impact on the German economy.</li>
          </ul>
        </div>

        {/* Job Seeker Visa */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">6. Job Seeker Visa</h3>
          <p className="text-lg text-gray-700 mb-2">
            For individuals wishing to come to Germany to look for a job.
          </p>
          <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>A recognized university degree or qualification.</li>
            <li>Proof of financial means to support yourself during the stay (approximately €947 per month).</li>
            <li>Health insurance coverage.</li>
          </ul>
        </div>
      </div>

      {/* Immigration Process */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Immigration Process</h2>
      <ol className="list-decimal list-inside text-lg text-gray-700 mb-4 space-y-2">
        <li>
          <strong>Research and Preparation:</strong> Identify the appropriate visa category and gather necessary documents.
        </li>
        <li>
          <strong>Apply for Visa:</strong> Submit your visa application at the German embassy or consulate in your home country and pay the required visa fees.
        </li>
        <li>
          <strong>Interview:</strong> Attend an interview, if required, to discuss your application.
        </li>
        <li>
          <strong>Receive Decision:</strong> Wait for the decision on your application.
        </li>
        <li>
          <strong>Register Upon Arrival:</strong> Register your address at the local registration office after arriving in Germany.
        </li>
        <li>
          <strong>Integration:</strong> Enroll in integration courses, if applicable, to improve your German language skills.
        </li>
      </ol>

      {/* Key Considerations */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Key Considerations</h2>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Knowledge of the German language can enhance your chances of successfully settling in Germany.</li>
        <li>Having comprehensive health insurance is mandatory for all residents.</li>
        <li>Ensure that you have adequate financial means to support yourself during your initial months in Germany.</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-3xl font-semibold mb-4 mt-8">Conclusion</h2>
      <p className="text-lg text-gray-700">
        Germany offers various pathways for immigration, catering to skilled workers, students, families, and entrepreneurs. Understanding the specific requirements and processes for each visa type is essential for a smooth immigration journey.
      </p>
    </div>
  );
}
