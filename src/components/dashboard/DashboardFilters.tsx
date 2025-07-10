import React from "react";

const DashboardFilters: React.FC = () => (
  <div className="flex flex-row flex-wrap justify-between items-center px-4 py-4 w-full max-w-[960px] gap-3">
    <h1 className="text-[#121417] font-bold text-3xl">Invoices</h1>
    <button className="bg-[#F2F2F5] rounded-xl px-4 py-2 text-[#121417] font-medium text-sm min-w-[84px]">New Invoice</button>
  </div>
);

export default DashboardFilters;
