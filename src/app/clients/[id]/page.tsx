"use client";
import React from "react";
import ClientIdentification from "@/components/clientComponents/ClientIdentification";
import ClientHistorySummary from "@/components/clientComponents/ClientHistorySummary";
import ClientDealsTable from "@/components/clientComponents/ClientDealsTable";
import ClientPastInvoicesTable from "@/components/clientComponents/ClientPastInvoicesTable";

const mockClient = {
  name: "Sarah Johnson",
  company: "Tech Solutions Inc.",
  contact: "sarah.johnson@techsolutions.com",
  history: {
    totalValue: "$150,000",
    deals: 12,
    avgDeal: "$12,500",
  },
  deals: [
    {
      project: "Website Redesign",
      start: "2023-01-15",
      end: "2023-03-15",
      value: "$25,000",
    },
    {
      project: "Mobile App Development",
      start: "2023-04-01",
      end: "2023-06-30",
      value: "$40,000",
    },
    {
      project: "Marketing Campaign",
      start: "2023-07-15",
      end: "2023-09-15",
      value: "$30,000",
    },
    {
      project: "SEO Optimization",
      start: "2023-10-01",
      end: "2023-12-31",
      value: "$35,000",
    },
    {
      project: "Content Creation",
      start: "2024-01-15",
      end: "2024-03-15",
      value: "$20,000",
    },
  ],
  invoices: [
    {
      number: "INV-2023-001",
      date: "2023-03-15",
      status: "Paid",
      amount: "$25,000",
    },
    {
      number: "INV-2023-002",
      date: "2023-06-30",
      status: "Paid",
      amount: "$40,000",
    },
    {
      number: "INV-2023-003",
      date: "2023-09-15",
      status: "Paid",
      amount: "$30,000",
    },
    {
      number: "INV-2023-004",
      date: "2023-12-31",
      status: "Paid",
      amount: "$35,000",
    },
    {
      number: "INV-2024-001",
      date: "2024-03-15",
      status: "Paid",
      amount: "$20,000",
    },
  ],
};

const ClientPage = () => {
  // In a real app, fetch client by params.id
  const client = mockClient;

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <div className="flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                  Client Overview
                </p>
                <p className="text-[#617589] text-sm font-normal leading-normal">
                  View client history, previous deals, and past invoices.
                </p>
              </div>
            </div>
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Client Identification
            </h2>
            <ClientIdentification
              name={client.name}
              company={client.company}
              contact={client.contact}
            />
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              History Summary
            </h2>
            <ClientHistorySummary
              totalValue={client.history.totalValue}
              deals={client.history.deals}
              avgDeal={client.history.avgDeal}
            />
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Previous Deals
            </h2>
            <ClientDealsTable deals={client.deals} />
            <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Past Invoices
            </h2>
            <ClientPastInvoicesTable invoices={client.invoices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
