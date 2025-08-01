import React from "react";

const GetStartedSection: React.FC = () => (
  <section className="@container">
    <div className="flex flex-col justify-center gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Get Started with InvoiceGenius Today
        </h1>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="flex justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0c7bf2] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
            <span className="truncate">Create Invoice</span>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default GetStartedSection;
