import React from "react";
import DashboardHeader from "../../components/invoiceComponents/DashboardHeader";
import Filters from "../../components/invoiceComponents/filter";
import InvoiceTable from "../../components/invoiceComponents/InvoiceTable";
import DashboardFooter from "../../components/invoiceComponents/DashboardFooter";

const InvoicePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] w-full items-center">
      <DashboardHeader />
      <main className="flex flex-col items-center w-full flex-1">
        <Filters />
        <InvoiceTable />
      </main>
      <DashboardFooter />
    </div>
  );
};

export default InvoicePage;
