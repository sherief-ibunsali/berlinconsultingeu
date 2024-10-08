"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx"; // Utility to conditionally apply classes

export default function BusinessRegistrationLayout({ children }) {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state

  // Define the paths to be used in navigation
  const links = [
    { name: "Germany", path: "/services/immigration/germany" },
    { name: "Portugal", path: "/services/immigration/portugal" },
    { name: "United Kingdom", path: "/services/immigration/uk" },
    { name: "United States", path: "/services/immigration/us" },
  ];

  return (
    <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row">
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden mb-4 p-2 bg-teal-800 text-white rounded"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>

      {/* Sidebar Navigation */}
      <nav
        className={clsx(
          "md:w-1/4 md:pr-8 md:block", // Show the sidebar on medium+ screens
          isSidebarOpen ? "block" : "hidden", // Toggle visibility on small screens
          "w-full mb-4 md:mb-0" // Adjust width for mobile view
        )}
      >
        <h2 className="text-2xl font-bold mb-6">Countries</h2>
        <ul className="space-y-4">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={clsx(
                  "text-teal-500 hover:text-teal-800", // Default link styling
                  router.pathname === link.path &&
                    "font-bold bg-teal-200 text-teal-900 p-2 rounded" // Active link styling: Contrasting text and background
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="md:w-3/4">
        <h1 className="text-3xl font-bold mb-8">
          Immigration Services
        </h1>
        {children}
      </div>
    </div>
  );
}
