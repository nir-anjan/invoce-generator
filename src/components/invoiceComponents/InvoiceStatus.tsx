import React from "react";

interface InvoiceStatusProps {
  status: string;
}

const statusIcon = (
  <div className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-10">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
    </svg>
  </div>
);

const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status }) => (
  <div className="flex items-center gap-4 bg-white px-4 min-h-14">
    {statusIcon}
    <p className="text-[#111418] text-base font-normal leading-normal flex-1 truncate">
      {status}
    </p>
  </div>
);

export default InvoiceStatus;
