import React from "react";
import Link from "next/link";

const clients = [
  {
    client: "Acme Corp",
    contact: "Sarah Johnson",
    email: "sarah.johnson@acmecorp.com",
    phone: "555-123-4567",
    address: "123 Main St, Anytown, USA",
  },
  {
    client: "Tech Solutions Inc.",
    contact: "David Lee",
    email: "david.lee@techsolutions.com",
    phone: "555-987-6543",
    address: "456 Oak Ave, Anytown, USA",
  },
  {
    client: "Global Innovations Ltd.",
    contact: "Emily Chen",
    email: "emily.chen@globalinnovations.com",
    phone: "555-246-8013",
    address: "789 Pine Ln, Anytown, USA",
  },
  {
    client: "Creative Designs Co.",
    contact: "Michael Brown",
    email: "michael.brown@creativedesigns.com",
    phone: "555-135-7924",
    address: "321 Elm Rd, Anytown, USA",
  },
  {
    client: "Dynamic Systems LLC",
    contact: "Jessica Wilson",
    email: "jessica.wilson@dynamicsystems.com",
    phone: "555-369-1470",
    address: "654 Maple Dr, Anytown, USA",
  },
];

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const ClientsTable = () => (
  <div className="bg-white border border-[#DEE0E3] rounded-xl w-full overflow-hidden">
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-[#E6E8EB]">
          <th className="font-medium text-[#121417] bg-white text-sm py-3 px-4 text-left">
            Client
          </th>
          <th className="font-medium text-[#121417] bg-white text-sm py-3 px-4 text-left">
            Contact
          </th>
          <th className="font-medium text-[#121417] bg-white text-sm py-3 px-4 text-left">
            Email
          </th>
          <th className="font-medium text-[#121417] bg-white text-sm py-3 px-4 text-left">
            Phone
          </th>
          <th className="font-medium text-[#121417] bg-white text-sm py-3 px-4 text-left">
            Address
          </th>
        </tr>
      </thead>
      <tbody>
        {clients.map((c, i) => (
          <Link key={i} href={`/clients/${slugify(c.client)}`} legacyBehavior>
            <tr
              className={
                (i !== 0 ? "border-t border-[#E6E8EB] " : "") +
                "hover:bg-[#F2F2F5] cursor-pointer transition-colors"
              }
            >
              <td className="font-normal text-[#121417] text-sm py-2 px-4">
                {c.client}
              </td>
              <td className="font-normal text-[#6B7582] text-sm py-2 px-4">
                {c.contact}
              </td>
              <td className="font-normal text-[#6B7582] text-sm py-2 px-4">
                {c.email}
              </td>
              <td className="font-normal text-[#6B7582] text-sm py-2 px-4">
                {c.phone}
              </td>
              <td className="font-normal text-[#6B7582] text-sm py-2 px-4">
                {c.address}
              </td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  </div>
);

export default ClientsTable;
