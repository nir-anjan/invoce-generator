import React from "react";

const DashboardFooter: React.FC = () => (
  <footer className="flex flex-col items-center justify-center w-full py-8 bg-white border-t border-[#E6E8EB] mt-10">
    <div className="flex flex-row flex-wrap justify-center gap-8 mb-2">
      <span className="text-[#6B7582] text-base">Terms of Service</span>
      <span className="text-[#6B7582] text-base">Privacy Policy</span>
      <span className="text-[#6B7582] text-base">Contact Us</span>
    </div>
    <span className="text-[#6B7582] text-base">
      © 2024 InvoiceGenius. All rights reserved.
    </span>
  </footer>
);

export default DashboardFooter;
