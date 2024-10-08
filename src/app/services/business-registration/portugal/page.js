export default function Portugal() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">Business Registration in Portugal</h1>

            <p className="text-lg text-gray-700 mb-4">
                Portugal is becoming an attractive business hub in Europe, known for its friendly tax policies, access to the European market, and growing startup ecosystem. In this guide, we’ll explore the different types of businesses you can register in Portugal, along with their requirements, advantages, and disadvantages.
            </p>

            {/* Types of Companies */}
            <h2 className="text-3xl font-semibold mb-4">Types of Companies in Portugal</h2>

            {/* LDA - Sociedade por Quotas */}
            <h3 className="text-2xl font-semibold mb-3">1. LDA (Sociedade por Quotas)</h3>
            <p className="text-lg text-gray-700 mb-2">
                The LDA is a limited liability company in Portugal, suitable for small to medium-sized businesses. It&apos;s similar to the GmbH in Germany or the LLC in the US.
            </p>
            <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Minimum share capital of €1 per shareholder (though it&apos;s common to have more).</li>
                <li>At least one shareholder (can be an individual or legal entity).</li>
                <li>A managing director must be appointed.</li>
                <li>Company must be registered at the Commercial Registry Office (Conservatória do Registo Comercial).</li>
                <li>A registered office address in Portugal is required.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Limited liability for shareholders.</li>
                <li>Low minimum capital requirements.</li>
                <li>Suitable for small and medium enterprises.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Disadvantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                <li>Some administrative complexities and annual reporting requirements.</li>
            </ul>

            {/* SA - Sociedade Anónima */}
            <h3 className="text-2xl font-semibold mb-3">2. SA (Sociedade Anónima)</h3>
            <p className="text-lg text-gray-700 mb-2">
                The SA is a public limited company, ideal for larger businesses that plan to issue shares and raise significant capital.
            </p>
            <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Minimum share capital of €50,000.</li>
                <li>At least five shareholders are required (can be individuals or legal entities).</li>
                <li>A Board of Directors and Supervisory Board must be appointed.</li>
                <li>Registration with the Commercial Registry Office.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Limited liability for shareholders.</li>
                <li>Can raise capital by issuing shares.</li>
                <li>Ideal for large-scale operations with significant growth potential.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Disadvantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                <li>High capital requirement (€50,000).</li>
                <li>More complex corporate structure and administrative requirements.</li>
            </ul>

            {/* Sole Proprietorship (Empresário em Nome Individual) */}
            <h3 className="text-2xl font-semibold mb-3">3. Sole Proprietorship (Empresário em Nome Individual)</h3>
            <p className="text-lg text-gray-700 mb-2">
                A sole proprietorship is the simplest form of business in Portugal, commonly used by freelancers and small business owners.
            </p>
            <h4 className="text-xl font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>No minimum capital requirement.</li>
                <li>Registration with the local tax office and Social Security is required.</li>
                <li>The owner is personally liable for business debts.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Advantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
                <li>Easy and inexpensive to set up.</li>
                <li>Full control over business decisions.</li>
                <li>No minimum capital required.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-2">Disadvantages:</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
                <li>Unlimited personal liability for business debts.</li>
                <li>Not ideal for larger businesses with multiple stakeholders.</li>
            </ul>

            {/* Conclusion */}
            <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
            <p className="text-lg text-gray-700">
                Portugal offers a variety of business structures suitable for both small businesses and large enterprises. Whether you are a startup looking for flexibility or a large corporation aiming to expand, Portugal’s business environment provides the necessary tools and structures to support your growth.
            </p>
        </div>
    );
}
