"use client";

import React, { use } from "react";
import DashboardHeader from "@/components/invoiceComponents/DashboardHeader";
import ClientForm from "@/components/clientComponents/ClientForm";

const NewClientPage = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <div className="flex h-full grow flex-col">
        <DashboardHeader />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-full max-w-[512px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
                  Add New Client
                </p>
                <p className="text-[#60758a] text-sm font-normal leading-normal">
                  Enter the client's details below
                </p>
              </div>
            </div>
            <ClientForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewClientPage;
