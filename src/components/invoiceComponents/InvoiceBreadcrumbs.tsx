import React from "react";

interface InvoiceBreadcrumbsProps {
  invoiceId: string;
}

const InvoiceBreadcrumbs: React.FC<InvoiceBreadcrumbsProps> = ({
  invoiceId,
}) => (
  <div className="flex flex-wrap gap-2 p-4">
    <a
      className="text-[#617589] text-base font-medium leading-normal"
      href="/invoices"
    >
      Invoices
    </a>
    <span className="text-[#617589] text-base font-medium leading-normal">
      /
    </span>
    <span className="text-[#111418] text-base font-medium leading-normal">
      Invoice #{invoiceId}
    </span>
  </div>
);

export default InvoiceBreadcrumbs;
