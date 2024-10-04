"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx"; // A utility to conditionally apply classes

export default function BusinessRegistrationLayout({ children }) {
    const router = useRouter();

    // Define the paths to be used in navigation
    const links = [
        { name: "Germany", path: "/services/business-registration/germany" },
        { name: "Portugal", path: "/services/business-registration/portugal" },
        { name: "United Kingdom", path: "/services/business-registration/uk" },
        { name: "United States", path: "/services/business-registration/us" },
    ];

    return (
        <div className="container mx-auto px-4 py-8 flex">
            {/* Sidebar Navigation */}
            <nav className="w-1/4 pr-8">
                <h2 className="text-2xl font-bold mb-6">Countries</h2>
                <ul className="space-y-4">
                    {links.map((link) => (
                        <li key={link.path}>
                            <Link
                                href={link.path}
                                className={clsx(
                                    "text-blue-500 hover:text-blue-700", // Default link styling
                                    router.pathname === link.path && "font-bold text-blue-700" // Active link styling
                                )}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Main Content */}
            <div className="w-3/4">
                <h1 className="text-3xl font-bold mb-8">Business Registration Services</h1>
                {children}
            </div>
        </div>
    );
}