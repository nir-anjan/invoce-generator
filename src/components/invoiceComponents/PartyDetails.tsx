import React from "react";

interface PartyDetailsProps {
  title: string;
  name: string;
  email: string;
  address: string;
}

const PartyDetails: React.FC<PartyDetailsProps> = ({
  title,
  name,
  email,
  address,
}) => (
  <>
    <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
      {title}
    </h3>
    <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
        <p className="text-[#617589] text-sm font-normal leading-normal">
          Name
        </p>
        <p className="text-[#111418] text-sm font-normal leading-normal">
          {name}
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
        <p className="text-[#617589] text-sm font-normal leading-normal">
          Email
        </p>
        <p className="text-[#111418] text-sm font-normal leading-normal">
          {email}
        </p>
      </div>
      <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
        <p className="text-[#617589] text-sm font-normal leading-normal">
          Address
        </p>
        <p className="text-[#111418] text-sm font-normal leading-normal">
          {address}
        </p>
      </div>
    </div>
  </>
);

export default PartyDetails;
