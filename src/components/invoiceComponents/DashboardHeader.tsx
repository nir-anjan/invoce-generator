"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Define the navigation links in an array for easy mapping and maintenance
const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/invoices", label: "Invoices" },
  { href: "/clients", label: "Clients" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
  { href: "/help", label: "Help" },
];

const ResponsiveNavbar: React.FC = () => {
  // State to manage the visibility of the mobile sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Effect to handle closing the sidebar when the 'Escape' key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Effect to handle focus trapping and body scroll lock
  useEffect(() => {
    if (isSidebarOpen) {
      // Prevent background scrolling when the sidebar is open
      document.body.style.overflow = "hidden";
      // Focus the first focusable element in the sidebar (the close button)
      setTimeout(() => {
        const firstFocusableElement = sidebarRef.current?.querySelector(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusableElement instanceof HTMLElement) {
          firstFocusableElement.focus();
        }
      }, 100); // Timeout ensures the element is visible before focusing
    } else {
      // Restore background scrolling
      document.body.style.overflow = "auto";
      // Return focus to the menu button that opened the sidebar
      menuButtonRef.current?.focus();
    }
  }, [isSidebarOpen]);

  return (
    <header className="relative bg-white border-b border-[#E6E8EB] shadow-sm sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 w-full">
        {/* Logo and Desktop Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3">
            {/* Logo SVG */}
            <div className="w-6 h-6 flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#121417"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="font-bold text-lg text-[#121417]">
              InvoiceGenius
            </span>
          </Link>
          {/* Desktop Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex flex-row gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-sm text-[#121417] transition-colors duration-200 hover:text-blue-600 hover:bg-[#F2F2F5] px-3 py-2 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right side icons and hamburger menu */}
        <div className="flex items-center gap-4">
          {/* Search Bar - Hidden on small mobile */}
          <div className="hidden sm:flex items-center bg-[#F2F2F5] rounded-xl h-10">
            <div className="pl-3 pr-2">
              <MagnifyingGlassIcon className="h-5 w-5 text-[#6B7582]" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-[#6B7582] text-base w-24 focus:w-32 transition-all duration-300 outline-none pr-3"
            />
          </div>

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="https://i.pravatar.cc/40?u=a042581f4e29026704d"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              ref={menuButtonRef}
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open main menu"
              aria-controls="mobile-menu"
              aria-expanded={isSidebarOpen}
              className="p-2 rounded-md text-[#121417] hover:bg-[#F2F2F5] focus:outline-none"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Sidebar Panel */}
      <div
        ref={sidebarRef}
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2
            id="mobile-menu-title"
            className="text-lg font-semibold text-gray-800"
          >
            Menu
          </h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
          {/* Search Bar inside mobile menu for small screens */}
          <div className="sm:hidden px-4 pt-4">
            <div className="flex items-center bg-[#F2F2F5] rounded-xl h-10">
              <div className="pl-3 pr-2">
                <MagnifyingGlassIcon className="h-5 w-5 text-[#6B7582]" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-[#6B7582] text-base w-full focus:outline-none pr-3"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ResponsiveNavbar;
