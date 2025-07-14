import React from "react";

type Invoice = {
  number: string;
  date: string;
  status: string;
  amount: string;
};

type Props = {
  invoices: Invoice[];
};

const ClientPastInvoicesTable: React.FC<Props> = ({ invoices }) => (
  <div className="px-4 py-3 @container">
    <div className="flex overflow-hidden rounded-xl border border-[#dbe0e6] bg-white">
      <table className="flex-1">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
              Invoice Number
            </th>
            <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
              Date
            </th>
            <th className="px-4 py-3 text-left text-[#111418] w-60 text-sm font-medium leading-normal">
              Status
            </th>
            <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv, i) => (
            <tr key={i} className="border-t border-t-[#dbe0e6]">
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#111418] text-sm font-normal leading-normal">
                {inv.number}
              </td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {inv.date}
              </td>
              <td className="h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-medium leading-normal w-full">
                  <span className="truncate">{inv.status}</span>
                </button>
              </td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {inv.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ClientPastInvoicesTable;
