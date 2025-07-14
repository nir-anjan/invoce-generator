import React from "react";

interface InvoiceSummaryProps {
  subtotal: string;
  discount: string;
  tax: string;
  total: string;
}

const InvoiceSummary: React.FC<InvoiceSummaryProps> = ({
  subtotal,
  discount,
  tax,
  total,
}) => (
  <div>
    <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
      Summary
    </h3>
    <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
        <p className="text-[#617589] text-sm font-normal leading-normal">
          Subtotal
        </p>
        <p className="text-[#111418] text-sm font-normal leading-normal">
          {subtotal}
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
        <p className="text-[#617589] text-sm font-normal leading-normal">
          Discount
        </p>
        <p className="text-[#111418] text-sm font-normal leading-normal">
          {discount}
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
        <p className="text-[#617589] text-sm font-normal leading-normal">
          Tax (5%)
        </p>
        <p className="text-[#111418] text-sm font-normal leading-normal">
          {tax}
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
        <p className="text-[#617589] text-sm font-normal leading-normal">
          Total
        </p>
        <p className="text-[#111418] text-sm font-normal leading-normal">
          {total}
        </p>
      </div>
    </div>
  </div>
);

export default InvoiceSummary;
