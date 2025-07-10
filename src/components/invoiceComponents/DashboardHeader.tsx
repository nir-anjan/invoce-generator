import React from "react";
import Link from "next/link";

const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/invoices", label: "Invoices" },
  { href: "/clients", label: "Clients" },
  { href: "/reports", label: "Reports" },
  { href: "/settings", label: "Settings" },
  { href: "/help", label: "Help" },
];

const DashboardHeader: React.FC = () => (
  <nav className="flex flex-row justify-between items-center px-10 py-3 border-b border-[#E6E8EB] w-full bg-white">
    <div className="flex flex-row items-center gap-8">
      <Link href="/" className="flex flex-row items-center gap-4">
        {/* Logo */}
        <div className="w-6 h-6">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="#121417" strokeWidth="2" />
          </svg>
        </div>
        <span className="font-bold text-lg text-[#121417]">InvoiceGenius</span>
      </Link>
      <div className="flex flex-row gap-9">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-medium text-sm text-[#121417] transition-colors duration-200 hover:text-blue-600 hover:bg-[#F2F2F5] px-3 py-1 rounded"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
    <div className="flex flex-row items-center gap-8">
      {/* Search Bar */}
      <div className="flex flex-row items-center bg-[#F2F2F5] rounded-xl overflow-hidden w-[160px]">
        <div className="flex items-center justify-center w-10 h-10 bg-[#F2F2F5] rounded-l-xl">
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" stroke="#6B7582" strokeWidth="2" />
            <path
              d="M20 20L17 17"
              stroke="#6B7582"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F2F2F5] text-[#6B7582] text-base px-2 py-1 w-full outline-none rounded-r-xl"
        />
      </div>
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-[#F2F2F5] flex items-center justify-center">
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="8" r="4" stroke="#121417" strokeWidth="2" />
          <path
            d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"
            stroke="#121417"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  </nav>
);

export default DashboardHeader;
