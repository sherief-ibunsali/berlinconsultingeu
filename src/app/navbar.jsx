"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname();

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Show dropdown menu
    const showDropdown = () => {
        setIsDropdownOpen(true);
    };

    // Hide dropdown menu
    const hideDropdown = () => {
        setIsDropdownOpen(false);
    };

    // Handle submenu click to close dropdown after click
    const handleSubMenuClick = () => {
        hideDropdown();
    };

    // Add class for active menu item based on SSR-compatible `pathname`
    const linkStyle = (path) =>
        pathname === path
            ? "bg-teal-700 text-white border border-teal-700"
            : "text-teal-500 hover:text-white hover:bg-teal-700";

    return (
        <nav className="bg-teal-900 shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-extrabold text-white font-[Poppins]">
                        <Link href="/">Berlin Consulting Services</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-lg font-semibold">
                        <Link href="/" className={`${linkStyle("/")} py-1 px-3 rounded`}>
                            Home
                        </Link>
                        <Link href="/about" className={`${linkStyle("/about")} py-1 px-3 rounded`}>
                            About Us
                        </Link>
                        {/* Services Menu with Dropdown */}
                        <div className="relative">
                            <button
                                className={`py-1 px-3 rounded inline-flex items-center ${linkStyle(
                                    "/services"
                                )}`}
                                onMouseEnter={showDropdown}
                            >
                                Services
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className="absolute top-10 left-0 bg-teal-900 text-white shadow-lg rounded-md w-48"
                                    onMouseEnter={showDropdown}
                                    onMouseLeave={hideDropdown}
                                    onClick={handleSubMenuClick}
                                >
                                    <Link
                                        href="/services/business-registration"
                                        className={`${linkStyle(
                                            "/services/business-registration"
                                        )} block px-4 py-2 hover:bg-teal-700`}
                                    >
                                        Business Registration
                                    </Link>
                                    <Link
                                        href="/services/immigration"
                                        className={`${linkStyle(
                                            "/services/immigration"
                                        )} block px-4 py-2 hover:bg-teal-700`}
                                    >
                                        Immigration
                                    </Link>
                                    <Link
                                        href="/services/schengen-visa"
                                        className={`${linkStyle(
                                            "/services/schengen-visa"
                                        )} block px-4 py-2 hover:bg-teal-700`}
                                    >
                                        Schengen Visa
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link href="/blog" className={`${linkStyle("/blog")} py-1 px-3 rounded`}>
                            Blog
                        </Link>
                        <Link href="/contact" className={`${linkStyle("/contact")} py-1 px-3 rounded`}>
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-teal-900">
                        <div className="flex flex-col space-y-4 text-lg font-semibold py-4">
                            <Link href="/" className={`${linkStyle("/")} py-2 px-4 rounded`} onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link href="/about" className={`${linkStyle("/about-us")} py-2 px-4 rounded`} onClick={toggleMenu}>
                                About Us
                            </Link>
                            {/* Services dropdown for mobile */}
                            <button
                                className={`${linkStyle("/services")} py-2 px-4 rounded inline-flex items-center`}
                                onClick={showDropdown}
                            >
                                Services
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="bg-teal-800 px-4">
                                    <Link href="/schengen-visa" className={`${linkStyle("/schengen-visa")} block py-2 px-4 rounded`} onClick={toggleMenu}>
                                        Schengen Visa
                                    </Link>
                                    <Link href="/immigration" className={`${linkStyle("/immigration")} block py-2 px-4 rounded`} onClick={toggleMenu}>
                                        Immigration & Work Permit
                                    </Link>
                                    <Link href="/business-registration" className={`${linkStyle("/business-registration")} block py-2 px-4 rounded`} onClick={toggleMenu}>
                                        Business Registration
                                    </Link>
                                </div>
                            )}
                            <Link href="/blog" className={`${linkStyle("/blog")} py-2 px-4 rounded`}>
                                Blog
                            </Link>
                            <Link href="/contact" className={`${linkStyle("/contact-us")} py-2 px-4 rounded`} onClick={toggleMenu}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}