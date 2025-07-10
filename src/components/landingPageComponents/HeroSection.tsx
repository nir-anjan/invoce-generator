import React from "react";

const HeroSection: React.FC = () => (
  <div className="flex flex-1 justify-center py-5 px-4 sm:px-8 md:px-20 lg:px-40">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
      <div className="@container">
        <div className="p-0 sm:p-2 md:p-4">
          <div
            className="flex min-h-[320px] sm:min-h-[400px] md:min-h-[480px] flex-col gap-6 md:gap-8 rounded-lg items-start justify-end px-4 pb-8 md:px-10 md:pb-10 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiRoUyARX47nta2GGiAsGQhsqvXuUUvb8WpZIvtCIKszMlr1C3yVmSIqWIVkyVXcAYZBr6q7alAliyQw0Vcd_nJFWFpBA00gmorw3EvfschrrxCADOvTKmZaiiqA2biRAj4DzBxF9Ci8iyBu0xiIxOdg5Y8ef3dzDgJvIdw8oDlfA9vGKKURRCLYXp4F1THLXGrMPErgjzEUWx5R0_Hf2sj9to6iu_4-879w1xAizZODX6QlghDPYyAW5-1skd6P6s9HdLyUNG7t8z')",
            }}
          >
            <div className="flex flex-col gap-2 text-left w-full">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]">
                Generate Professional Invoices in Minutes
              </h1>
              <h2 className="text-white text-xs sm:text-sm md:text-base font-normal leading-normal">
                InvoiceGenius simplifies the invoicing process for freelancers
                and small businesses. Create, customize, and send invoices with
                ease.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 md:h-12 md:px-5 bg-[#0c7bf2] text-white text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em] mt-4">
              <span className="truncate">Create Invoice</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
