import React from "react";

type Props = {
  totalValue: string;
  deals: number;
  avgDeal: string;
};

const ClientHistorySummary: React.FC<Props> = ({ totalValue, deals, avgDeal }) => (
  <div className="flex flex-wrap gap-4 p-4">
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbe0e6]">
      <p className="text-[#111418] text-base font-medium leading-normal">Total Business Value</p>
      <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{totalValue}</p>
    </div>
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbe0e6]">
      <p className="text-[#111418] text-base font-medium leading-normal">Number of Deals</p>
      <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{deals}</p>
    </div>
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#dbe0e6]">
      <p className="text-[#111418] text-base font-medium leading-normal">Average Deal Size</p>
      <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{avgDeal}</p>
    </div>
  </div>
);

export default ClientHistorySummary;
