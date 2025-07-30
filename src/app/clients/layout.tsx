import React from "react";
import DashboardHeader from "@/components/invoiceComponents/DashboardHeader";

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <DashboardHeader />
      <main className="flex-1 flex flex-col items-center justify-start">
        {children}
      </main>
    </div>
  );
}
