import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ClientFormProps {
  onSuccess?: () => void;
}

interface FormState {
  companyName: string;
  clientName: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  taxId: string;
  website: string;
}

const initialState: FormState = {
  companyName: "",
  clientName: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
  taxId: "",
  website: "",
};

const validateEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);

const ClientForm: React.FC<ClientFormProps> = ({ onSuccess }) => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[e.target.name];
      return newErrors;
    });
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.companyName) errs.companyName = "Company name is required";
    if (!form.clientName) errs.clientName = "Client name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!validateEmail(form.email)) errs.email = "Invalid email";
    if (!form.phone) errs.phone = "Phone number is required";
    if (!form.address) errs.address = "Address is required";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      if (onSuccess) onSuccess();
      setTimeout(() => router.push("/clients"), 1200);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full max-w-full md:max-w-3xl lg:max-w-4xl mx-auto py-5 bg-white rounded-xl shadow-sm border border-[#e6e8eb]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 px-2 md:px-8 py-2 w-full">
        <label className="flex flex-col w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Company Name
          </span>
          <input
            name="companyName"
            placeholder="Enter company name"
            className={`form-input rounded-lg h-11 p-3 border ${
              errors.companyName ? "border-red-400" : "border-[#dbe0e6]"
            } bg-white text-base w-full`}
            value={form.companyName}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.companyName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.companyName}
            </span>
          )}
        </label>

        <label className="flex flex-col w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Client Name
          </span>
          <input
            name="clientName"
            placeholder="Enter client name"
            className={`form-input rounded-lg h-11 p-3 border ${
              errors.clientName ? "border-red-400" : "border-[#dbe0e6]"
            } bg-white text-base w-full`}
            value={form.clientName}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.clientName && (
            <span className="text-red-500 text-xs mt-1">
              {errors.clientName}
            </span>
          )}
        </label>

        <label className="flex flex-col w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Email
          </span>
          <input
            name="email"
            placeholder="Enter email"
            className={`form-input rounded-lg h-11 p-3 border ${
              errors.email ? "border-red-400" : "border-[#dbe0e6]"
            } bg-white text-base w-full`}
            value={form.email}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">{errors.email}</span>
          )}
        </label>

        <label className="flex flex-col w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Phone Number
          </span>
          <input
            name="phone"
            placeholder="Enter phone number"
            className={`form-input rounded-lg h-11 p-3 border ${
              errors.phone ? "border-red-400" : "border-[#dbe0e6]"
            } bg-white text-base w-full`}
            value={form.phone}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs mt-1">{errors.phone}</span>
          )}
        </label>

        <label className="flex flex-col md:col-span-2 w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Address
          </span>
          <textarea
            name="address"
            placeholder="Enter address"
            className={`form-input rounded-lg min-h-24 p-3 border ${
              errors.address ? "border-red-400" : "border-[#dbe0e6]"
            } bg-white text-base w-full`}
            value={form.address}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.address && (
            <span className="text-red-500 text-xs mt-1">{errors.address}</span>
          )}
        </label>

        <label className="flex flex-col md:col-span-2 w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Notes (optional)
          </span>
          <textarea
            name="notes"
            placeholder="Add any notes about the client"
            className="form-input rounded-lg min-h-20 p-3 border border-[#dbe0e6] bg-white text-base w-full"
            value={form.notes}
            onChange={handleChange}
            disabled={submitting}
          />
        </label>

        <div className="text-[#111418] text-base font-bold pt-2 pb-1 md:col-span-2">
          Optional Fields
        </div>

        <label className="flex flex-col w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Tax ID (optional)
          </span>
          <input
            name="taxId"
            placeholder="Enter tax ID"
            className="form-input rounded-lg h-11 p-3 border border-[#dbe0e6] bg-white text-base w-full"
            value={form.taxId}
            onChange={handleChange}
            disabled={submitting}
          />
        </label>

        <label className="flex flex-col w-full">
          <span className="text-[#111418] text-base font-medium pb-1">
            Website (optional)
          </span>
          <input
            name="website"
            placeholder="Enter website"
            className="form-input rounded-lg h-11 p-3 border border-[#dbe0e6] bg-white text-base w-full"
            value={form.website}
            onChange={handleChange}
            disabled={submitting}
          />
        </label>
      </div>

      <div className="flex justify-end gap-3 px-4 py-3 w-full">
        <button
          type="button"
          className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold tracking-[0.015em]"
          onClick={() => router.push("/clients")}
          disabled={submitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-10 px-4 bg-[#2a8ef2] text-white text-sm font-bold tracking-[0.015em] disabled:opacity-60"
          disabled={submitting}
        >
          {submitting ? "Saving..." : success ? "Saved!" : "Save"}
        </button>
      </div>

      {success && (
        <div className="text-green-600 text-center mt-2">
          Client added successfully!
        </div>
      )}
    </form>
  );
};

export default ClientForm;
