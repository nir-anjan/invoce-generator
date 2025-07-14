import React from "react";

type Props = {
  name: string;
  company: string;
  contact: string;
};

const ClientIdentification: React.FC<Props> = ({ name, company, contact }) => (
  <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
      <p className="text-[#617589] text-sm font-normal leading-normal">
        Client Name
      </p>
      <p className="text-[#111418] text-sm font-normal leading-normal">
        {name}
      </p>
    </div>
    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
      <p className="text-[#617589] text-sm font-normal leading-normal">
        Company
      </p>
      <p className="text-[#111418] text-sm font-normal leading-normal">
        {company}
      </p>
    </div>
    <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dbe0e6] py-5">
      <p className="text-[#617589] text-sm font-normal leading-normal">
        Contact
      </p>
      <p className="text-[#111418] text-sm font-normal leading-normal">
        {contact}
      </p>
    </div>
  </div>
);

export default ClientIdentification;
