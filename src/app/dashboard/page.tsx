"use client";
import React from "react";
import OverviewCard from "@/components/dashboard/OverviewCard";
import RecentActivityItem from "@/components/dashboard/RecentActivityItem";

const DashboardPage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      <div className="w-[960px] mt-10">
        <div className="font-bold text-[32px] text-[#121417] mb-4">
          Dashboard
        </div>
        <div className="font-bold text-[18px] text-[#121417] mb-2">
          Overview
        </div>
        <div className="flex gap-4 mb-8">
          <OverviewCard title="Total Outstanding" value="$2,450" />
          <OverviewCard title="Overdue" value="$500" />
          <OverviewCard title="Drafts" value={3} />
        </div>
        <div className="font-bold text-[18px] text-[#121417] mb-2">
          Recent Activity
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <RecentActivityItem
            icon={<span className="text-2xl">🧾</span>}
            title="Invoice sent to client"
            subtitle="Invoice #1234"
          />
          <RecentActivityItem
            icon={<span className="text-2xl">👤</span>}
            title="New client added"
            subtitle="Client: Sarah Johnson"
          />
          <RecentActivityItem
            icon={<span className="text-2xl">🧾</span>}
            title="Invoice paid by client"
            subtitle="Invoice #1233"
          />
        </div>
        <div className="font-bold text-[18px] text-[#121417] mb-2">
          Quick Actions
        </div>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition  duration-200 ease-in-out">
            New Invoice
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
            onClick={() => (window.location.href = "/clients/newClient")}
          >
            New Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
