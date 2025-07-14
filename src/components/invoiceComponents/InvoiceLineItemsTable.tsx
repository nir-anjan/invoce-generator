import React from "react";

export interface LineItem {
  description: string;
  quantity: number;
  unitPrice: string;
  total: string;
}

interface InvoiceLineItemsTableProps {
  items: LineItem[];
}

const InvoiceLineItemsTable: React.FC<InvoiceLineItemsTableProps> = ({
  items,
}) => (
  <div className="px-4 py-3 @container">
    <div className="flex overflow-hidden rounded-xl border border-[#dbe0e6] bg-white">
      <table className="flex-1">
        <thead>
          <tr className="bg-white">
            <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
              Description
            </th>
            <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
              Quantity
            </th>
            <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
              Unit Price
            </th>
            <th className="px-4 py-3 text-left text-[#111418] w-[400px] text-sm font-medium leading-normal">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr className="border-t border-t-[#dbe0e6]" key={idx}>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {item.description}
              </td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {item.quantity}
              </td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {item.unitPrice}
              </td>
              <td className="h-[72px] px-4 py-2 w-[400px] text-[#617589] text-sm font-normal leading-normal">
                {item.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default InvoiceLineItemsTable;
