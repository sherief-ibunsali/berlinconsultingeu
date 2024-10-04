export default function Germany() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Business Registration in Germany</h1>

            <p className="text-lg text-gray-700 mb-4">
                Germany is known for its strong economy and business-friendly environment, making it an attractive destination for entrepreneurs looking to establish a company. In this guide, we’ll explore the different types of companies you can register in Germany, their requirements, and the advantages and disadvantages of each.
            </p>

            {/* Types of Companies */}
            <h2 className="text-3xl font-semibold mb-4">Types of Companies in Germany</h2>

            {/* GmbH - Gesellschaft mit beschränkter Haftung */}
            <h3 className="text-2xl font-semibold mb-3">1. GmbH (Gesellschaft mit beschränkter Haftung)</h3>
            <p className="text-lg text-gray-700 mb-2">
                The GmbH is one of the most common types of companies in Germany, equivalent to a limited liability company (LLC) in other countries.
            </p>
            <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Minimum share capital of €25,000 (at least €12,500 must be paid in before registration).</li>
                <li>A managing director must be appointed.</li>
                <li>At least one shareholder (can be an individual or legal entity).</li>
                <li>Company must be registered at the commercial register (Handelsregister).</li>
                <li>A registered office address in Germany is required.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Limited liability for shareholders (liability is limited to the company's assets).</li>
                <li>Strong corporate structure suitable for small to medium-sized businesses.</li>
                <li>Good reputation and trust in the German market.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Disadvantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                <li>High initial capital requirement (€25,000).</li>
                <li>More complex administrative requirements compared to sole proprietorships.</li>
            </ul>

            {/* UG - Unternehmergesellschaft (Mini-GmbH) */}
            <h3 className="text-2xl font-semibold mb-3">2. UG (Unternehmergesellschaft or Mini-GmbH)</h3>
            <p className="text-lg text-gray-700 mb-2">
                The UG is a variation of the GmbH with lower capital requirements, often referred to as the "Mini-GmbH."
            </p>
            <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Minimum share capital of €1 (though it's advisable to have more).</li>
                <li>At least one shareholder (can be an individual or legal entity).</li>
                <li>Profits must be retained until the minimum capital of €25,000 is reached (to convert to a GmbH).</li>
                <li>Company must be registered at the commercial register (Handelsregister).</li>
                <li>A registered office address in Germany is required.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Very low initial capital requirement (€1).</li>
                <li>Limited liability for shareholders.</li>
                <li>Flexibility to grow and convert into a full GmbH.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Disadvantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                <li>Perceived as less credible than a GmbH due to low capital.</li>
                <li>Profits are restricted as they must be retained until capital reaches €25,000.</li>
                <li>More administrative complexity than a sole proprietorship.</li>
            </ul>

            {/* AG - Aktiengesellschaft */}
            <h3 className="text-2xl font-semibold mb-3">3. AG (Aktiengesellschaft)</h3>
            <p className="text-lg text-gray-700 mb-2">
                The AG is a German public limited company (PLC) and is more commonly used for larger enterprises with significant capital and plans to go public.
            </p>
            <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Minimum share capital of €50,000.</li>
                <li>At least one shareholder (can be an individual or legal entity).</li>
                <li>Supervisory board and management board are required.</li>
                <li>Registration with the commercial register (Handelsregister).</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Ideal for larger companies with plans for public offerings (stock issuance).</li>
                <li>Limited liability for shareholders.</li>
                <li>Access to the capital market (can issue shares).</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Disadvantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                <li>High initial capital requirement (€50,000).</li>
                <li>More complex structure with supervisory and management boards.</li>
                <li>Strict regulatory requirements.</li>
            </ul>

            {/* Sole Proprietorship (Einzelunternehmen) */}
            <h3 className="text-2xl font-semibold mb-3">4. Sole Proprietorship (Einzelunternehmen)</h3>
            <p className="text-lg text-gray-700 mb-2">
                A sole proprietorship is the simplest form of business in Germany, commonly used by freelancers and small business owners.
            </p>
            <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>No minimum capital requirement.</li>
                <li>Registration with the local trade office (Gewerbeamt) is required.</li>
                <li>The owner is personally liable for business debts.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Easy and inexpensive to set up.</li>
                <li>Full control over business decisions.</li>
                <li>No requirement for a minimum capital.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Disadvantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                <li>Owner has unlimited personal liability for business debts.</li>
                <li>Not suitable for larger businesses with multiple stakeholders.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
            <p className="text-lg text-gray-700">
                Germany offers various types of company structures that cater to different business needs. Whether you are a small business owner looking for a simple setup, or a large enterprise planning to go public, there is a suitable option for you. It's essential to carefully consider the requirements, advantages, and disadvantages of each type before making your decision.
            </p>
        </div>
    );
}