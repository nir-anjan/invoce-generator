import React from "react";

type InvoiceRowProps = {
  id: string;
  client: string;
  date: string;
  dueDate: string;
  amount: string;
  status: string;
};

const statusColors: Record<string, string> = {
  Paid: "bg-[#F2F2F5] text-[#121417]",
  Sent: "bg-[#F2F2F5] text-[#121417]",
  Draft: "bg-[#F2F2F5] text-[#121417]",
};

const InvoiceTableRow: React.FC<InvoiceRowProps> = ({
  id,
  client,
  date,
  dueDate,
  amount,
  status,
}) => (
  <div className="flex flex-row items-center border-t border-[#E6E8EB] text-sm">
    <div className="flex-1 px-4 py-4 font-medium text-[#121417]">{id}</div>
    <div className="flex-1 px-4 py-4 text-[#6B7582]">{client}</div>
    <div className="flex-1 px-4 py-4 text-[#6B7582]">{date}</div>
    <div className="flex-1 px-4 py-4 text-[#6B7582]">{dueDate}</div>
    <div className="flex-1 px-4 py-4 text-[#6B7582]">{amount}</div>
    <div className="flex-1 px-4 py-4">
      <span
        className={`inline-block px-4 py-1 rounded-xl font-semibold text-center min-w-[60px] ${statusColors[status]}`}
      >
        {status}
      </span>
    </div>
    <div className="flex-1 px-4 py-4">
      <button className="font-bold text-[#6B7582]">View</button>
    </div>
  </div>
);

export default InvoiceTableRow;
