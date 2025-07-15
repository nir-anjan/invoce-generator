import React from "react";

type Deal = {
  project: string;
  start: string;
  end: string;
  value: string;
};

type Props = {
  deals: Deal[];
};

const ClientDealsTable: React.FC<Props> = ({ deals }) => (
  <div className="px-2 md:px-4 py-3 w-full">
    <div className="overflow-x-auto rounded-xl border border-[#dbe0e6] bg-white">
      <table className="min-w-[600px] w-full text-sm">
        <thead>
          <tr className="bg-white">
            <th className="px-2 md:px-4 py-3 text-left text-[#111418] w-[180px] md:w-[400px] text-sm font-medium leading-normal">
              Project Name
            </th>
            <th className="px-2 md:px-4 py-3 text-left text-[#111418] w-[120px] md:w-[400px] text-sm font-medium leading-normal">
              Start Date
            </th>
            <th className="px-2 md:px-4 py-3 text-left text-[#111418] w-[120px] md:w-[400px] text-sm font-medium leading-normal">
              End Date
            </th>
            <th className="px-2 md:px-4 py-3 text-left text-[#111418] w-[100px] md:w-[400px] text-sm font-medium leading-normal">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal, i) => (
            <tr key={i} className="border-t border-t-[#dbe0e6]">
              <td className="h-[56px] md:h-[72px] px-2 md:px-4 py-2 w-[180px] md:w-[400px] text-[#111418] text-sm font-normal leading-normal">
                {deal.project}
              </td>
              <td className="h-[56px] md:h-[72px] px-2 md:px-4 py-2 w-[120px] md:w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {deal.start}
              </td>
              <td className="h-[56px] md:h-[72px] px-2 md:px-4 py-2 w-[120px] md:w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {deal.end}
              </td>
              <td className="h-[56px] md:h-[72px] px-2 md:px-4 py-2 w-[100px] md:w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {deal.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ClientDealsTable;
