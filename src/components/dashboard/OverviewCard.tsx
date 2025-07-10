import React from "react";

interface OverviewCardProps {
  title: string;
  value: string | number;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value }) => (
  <div className="border border-[#DBE0E6] rounded-xl p-6 min-w-[158px] w-[298px] h-[112px] flex flex-col gap-2 bg-white">
    <div className="font-medium text-[16px] text-[#121417]">{title}</div>
    <div className="font-bold text-[24px] text-[#121417]">{value}</div>
  </div>
);

export default OverviewCard;
