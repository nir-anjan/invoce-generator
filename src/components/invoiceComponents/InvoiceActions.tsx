import React from "react";

interface InvoiceActionsProps {
  onEdit?: () => void;
  onMarkAsPaid?: () => void;
  onDownloadPDF?: () => void;
}

const InvoiceActions: React.FC<InvoiceActionsProps> = ({
  onEdit,
  onMarkAsPaid,
  onDownloadPDF,
}) => (
  <div className="flex justify-stretch">
    <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
        onClick={onEdit}
      >
        <span className="truncate">Edit</span>
      </button>
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#127ce7] text-white text-sm font-bold leading-normal tracking-[0.015em]"
        onClick={onMarkAsPaid}
      >
        <span className="truncate">Mark as Paid</span>
      </button>
      <button
        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal"
        onClick={onDownloadPDF}
      >
        <span className="truncate">Download PDF</span>
      </button>
    </div>
  </div>
);

export default InvoiceActions;
