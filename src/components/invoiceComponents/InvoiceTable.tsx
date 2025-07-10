import React from "react";
import InvoiceTableRow from "./InvoiceTableRow";

const invoices = [
  {
    id: "INV-2024-001",
    client: "Acme Corp",
    date: "May 15, 2024",
    dueDate: "June 14, 2024",
    amount: "$1,200.00",
    status: "Paid",
  },
  {
    id: "INV-2024-002",
    client: "Tech Solutions Inc.",
    date: "May 10, 2024",
    dueDate: "June 9, 2024",
    amount: "$850.00",
    status: "Sent",
  },
  {
    id: "INV-2024-003",
    client: "Global Innovations Ltd.",
    date: "May 5, 2024",
    dueDate: "June 4, 2024",
    amount: "$2,500.00",
    status: "Draft",
  },
  {
    id: "INV-2024-004",
    client: "Creative Designs Co.",
    date: "Apr 30, 2024",
    dueDate: "May 30, 2024",
    amount: "$600.00",
    status: "Paid",
  },
  {
    id: "INV-2024-005",
    client: "Software Dynamics LLC",
    date: "Apr 25, 2024",
    dueDate: "May 25, 2024",
    amount: "$1,500.00",
    status: "Sent",
  },
  {
    id: "INV-2024-006",
    client: "Marketing Masters Group",
    date: "Apr 20, 2024",
    dueDate: "May 20, 2024",
    amount: "$950.00",
    status: "Paid",
  },
  {
    id: "INV-2024-007",
    client: "Financial Services Ltd.",
    date: "Apr 15, 2024",
    dueDate: "May 15, 2024",
    amount: "$1,800.00",
    status: "Sent",
  },
  {
    id: "INV-2024-008",
    client: "Health & Wellness Inc.",
    date: "Apr 10, 2024",
    dueDate: "May 10, 2024",
    amount: "$750.00",
    status: "Paid",
  },
  {
    id: "INV-2024-009",
    client: "Educational Resources Co.",
    date: "Apr 5, 2024",
    dueDate: "May 5, 2024",
    amount: "$1,100.00",
    status: "Sent",
  },
  {
    id: "INV-2024-010",
    client: "Retail Solutions Group",
    date: "Mar 31, 2024",
    dueDate: "Apr 30, 2024",
    amount: "$1,350.00",
    status: "Paid",
  },
];

const InvoiceTable: React.FC = () => (
  <div className="w-full max-w-[960px] mx-auto bg-white border border-[#DEE0E3] rounded-xl overflow-hidden">
    <div className="flex flex-row bg-white text-[#121417] font-medium text-sm border-b border-[#E6E8EB]">
      <div className="flex-1 px-4 py-3">Invoice #</div>
      <div className="flex-1 px-4 py-3">Client</div>
      <div className="flex-1 px-4 py-3">Date</div>
      <div className="flex-1 px-4 py-3">Due Date</div>
      <div className="flex-1 px-4 py-3">Amount</div>
      <div className="flex-1 px-4 py-3">Status</div>
      <div className="flex-1 px-4 py-3">View</div>
    </div>
    {invoices.map((invoice) => (
      <InvoiceTableRow key={invoice.id} {...invoice} />
    ))}
  </div>
);

export default InvoiceTable;
