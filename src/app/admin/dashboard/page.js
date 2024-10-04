import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Blog Posts Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Manage Blog Posts</h2>
                    <p className="text-gray-700 mb-4">
                        Create, edit, and delete blog posts for your site.
                    </p>
                    <Link href="/admin/blog-posts" className="text-blue-500 hover:text-blue-700">
                        Go to Blog Posts Management
                    </Link>
                </div>

                {/* Appearance Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Control Appearance</h2>
                    <p className="text-gray-700 mb-4">
                        Manage the appearance settings of the website, including themes and layout.
                    </p>
                    <Link href="/admin/appearance" className="text-blue-500 hover:text-blue-700">
                        Go to Appearance Settings
                    </Link>
                </div>
            </div>
        </div>
    );
}