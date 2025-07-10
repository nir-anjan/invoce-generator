import React from "react";

interface QuickActionButtonProps {
  label: string;
  primary?: boolean;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  label,
  primary,
}) => (
  <button
    className={`h-10 min-w-[84px] max-w-[480px] px-4 rounded-full font-bold text-[14px] ${
      primary ? "bg-[#0A78ED] text-white" : "bg-[#F0F2F5] text-[#121417]"
    } mr-3`}
  >
    {label}
  </button>
);

export default QuickActionButton;
