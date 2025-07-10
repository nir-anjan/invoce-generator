import React from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardFilters from "../../components/dashboard/DashboardFilters";
import InvoiceTable from "../../components/dashboard/InvoiceTable";
import DashboardFooter from "../../components/dashboard/DashboardFooter";

const DashBoard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] w-full items-center">
      <DashboardHeader />
      <main className="flex flex-col items-center w-full flex-1">
        <DashboardFilters />
        <InvoiceTable />
      </main>
      <DashboardFooter />
    </div>
  );
};

export default DashBoard;
