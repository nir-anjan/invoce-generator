"use client";
import React from "react";
import { useParams } from "next/navigation";
import DashboardHeader from "@/components/invoiceComponents/DashboardHeader";
import InvoiceBreadcrumbs from "@/components/invoiceComponents/InvoiceBreadcrumbs";
import InvoiceStatus from "@/components/invoiceComponents/InvoiceStatus";
import PartyDetails from "@/components/invoiceComponents/PartyDetails";
import InvoiceLineItemsTable, {
  LineItem,
} from "@/components/invoiceComponents/InvoiceLineItemsTable";
import InvoiceSummary from "@/components/invoiceComponents/InvoiceSummary";
import InvoiceActions from "@/components/invoiceComponents/InvoiceActions";

const mockInvoice = {
  id: "12345",
  issuedDate: "July 15, 2024",
  status: "Paid",
  freelancer: {
    name: "Sophia Carter",
    email: "sophia.carter@email.com",
    address: "123 Elm Street, Anytown, CA 91234",
  },
  client: {
    name: "Acme Corp",
    email: "contact@acmecorp.com",
    address: "456 Oak Avenue, Anytown, CA 91234",
  },
  lineItems: [
    {
      description: "Website Design",
      quantity: 1,
      unitPrice: "$500.00",
      total: "$500.00",
    },
    {
      description: "Content Writing",
      quantity: 5,
      unitPrice: "$100.00",
      total: "$500.00",
    },
  ] as LineItem[],
  summary: {
    subtotal: "$1,000.00",
    discount: "$0.00",
    tax: "$50.00",
    total: "$1,050.00",
  },
};

const InvoicePage = () => {
  const params = useParams();
  const invoiceId = Array.isArray(params?.id)
    ? params.id[0]
    : params?.id || mockInvoice.id;
  // In real app, fetch invoice by invoiceId
  const invoice = { ...mockInvoice, id: invoiceId };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <div className="flex h-full grow flex-col">
        <DashboardHeader />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            <InvoiceBreadcrumbs invoiceId={invoice.id} />
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                  Invoice #{invoice.id}
                </p>
                <p className="text-[#617589] text-sm font-normal leading-normal">
                  Issued on {invoice.issuedDate}
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal">
                <span className="truncate">Download PDF</span>
              </button>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Status
            </h3>
            <InvoiceStatus status={invoice.status} />
            <PartyDetails title="Freelancer" {...invoice.freelancer} />
            <PartyDetails title="Client" {...invoice.client} />
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Line Items
            </h3>
            <InvoiceLineItemsTable items={invoice.lineItems} />
            <InvoiceSummary {...invoice.summary} />
            <InvoiceActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;
