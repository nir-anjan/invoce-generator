import React from "react";

// Helper component for form input fields
interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  optional?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  placeholder,
  type = "text",
  optional = false,
}) => (
  <div className="w-full">
    <label
      htmlFor={id}
      className="block text-base font-medium text-[#121417] mb-2"
    >
      {label} {optional && <span className="text-gray-400">(optional)</span>}
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full h-[56px] px-4 py-2 border border-[#DBE0E6] rounded-lg bg-white placeholder:text-[#61758A] focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

// Helper component for textarea fields
interface TextareaFieldProps {
  label: string;
  id: string;
  optional?: boolean;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  id,
  optional = false,
}) => (
  <div className="w-full md:col-span-2">
    <label
      htmlFor={id}
      className="block text-base font-medium text-[#121417] mb-2"
    >
      {label} {optional && <span className="text-gray-400">(optional)</span>}
    </label>
    <textarea
      id={id}
      rows={4}
      className="w-full min-h-[144px] p-4 border border-[#DBE0E6] rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
  </div>
);

export default function AddNewClientPage() {
  return (
    <div className="bg-white min-h-screen w-full font-sans text-[#121417]">
      {/* Main Content */}
      <main className="flex justify-center w-full p-4 sm:p-5 ">
        <div className="w-full  py-5">
          <form>
            {/* Form Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold">Add New Client</h1>
              <p className="text-sm text-[#61758A] mt-3">
                Enter the client&apos;s details below
              </p>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <InputField
                label="Company Name"
                id="companyName"
                placeholder="Enter company name"
              />
              <InputField
                label="Client Name"
                id="clientName"
                placeholder="Enter client name"
              />
              <InputField
                label="Email"
                id="email"
                placeholder="Enter email"
                type="email"
              />
              <InputField
                label="Phone Number"
                id="phoneNumber"
                placeholder="Enter phone number"
                type="tel"
              />
              <TextareaField label="Address" id="address" />
              <TextareaField label="Notes" id="notes" optional={true} />
            </div>

            {/* Optional Fields */}
            <div className="mt-10 pt-6 border-t border-[#E6E8EB]">
              <h2 className="text-lg font-bold">Optional Fields</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6">
                <InputField
                  label="Tax ID"
                  id="taxId"
                  placeholder="Enter tax ID"
                  optional={true}
                />
                <InputField
                  label="Website"
                  id="website"
                  placeholder="Enter website"
                  type="url"
                  optional={true}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-8 pt-6">
              <button
                type="button"
                className="h-10 px-6 font-bold text-sm bg-[#F0F2F5] text-[#121417] rounded-lg hover:bg-gray-200 w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="h-10 px-6 font-bold text-sm bg-[#298FF2] text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
