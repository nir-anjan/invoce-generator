import React from "react";
import ClientsHeader from "@/components/clientsPageComponets/ClientsHeader";
import ClientsSearchBar from "@/components/clientsPageComponets/ClientsSearchBar";
import ClientsTable from "@/components/clientsPageComponets/ClientsTable";

const ClientsPage = () => {
  return (
    <div className="w-screen h-screen min-h-screen min-w-full bg-white flex flex-col items-center justify-start">
      <div className="w-full max-w-5xl py-8">
        <ClientsHeader />
        <ClientsSearchBar />
        <ClientsTable />
      </div>
    </div>
  );
};

export default ClientsPage;
