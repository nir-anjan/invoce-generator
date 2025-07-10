import React from "react";

interface RecentActivityItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  subtitleColor?: string;
}

const RecentActivityItem: React.FC<RecentActivityItemProps> = ({
  icon,
  title,
  subtitle,
  subtitleColor,
}) => (
  <div className="flex items-center gap-4 py-2">
    <div className="w-12 h-12 bg-[#F0F2F5] rounded-lg flex items-center justify-center">
      {icon}
    </div>
    <div className="flex flex-col justify-center">
      <div className="font-medium text-[16px] text-[#121417]">{title}</div>
      <div
        className={`font-normal text-[14px] ${
          subtitleColor || "text-[#61758A]"
        }`}
      >
        {subtitle}
      </div>
    </div>
  </div>
);

export default RecentActivityItem;
