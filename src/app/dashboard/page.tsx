import React from "react";
import OverviewCard from "@/components/dashboard/OverviewCard";
import RecentActivityItem from "@/components/dashboard/RecentActivityItem";
import QuickActionButton from "@/components/dashboard/QuickActionButton";
import DashboardHeader from "@/components/invoiceComponents/DashboardHeader";

const DashboardPage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center">
      <DashboardHeader />
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
          <QuickActionButton label="New Invoice" primary />
          <QuickActionButton label="New Client" />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
