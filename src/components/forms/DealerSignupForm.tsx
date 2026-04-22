"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { indiaStates } from "@/data/indiaStates";

type FormFields = {
  companyName: string;
  representativeName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  pincode: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

const initialValues: FormFields = {
  companyName: "",
  representativeName: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  pincode: "",
};

export function DealerSignupForm() {
  const [values, setValues] = useState<FormFields>(initialValues);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setError(null);

    try {
      const response = await fetch("/dealer-request-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company_name: values.companyName,
          contact_person_name: values.representativeName,
          email: values.email,
          phone_number: values.phone,
          state: values.state,
          city: values.city,
          pincode: values.pincode,
        }),
      });

      const body = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof body?.error === "string"
            ? body.error
            : "Unable to submit your membership request.",
        );
      }

      setValues(initialValues);
      setSubmitState("success");
      setShowToast(true);

      window.setTimeout(() => setShowToast(false), 3000);
      window.setTimeout(() => setSubmitState("idle"), 3000);
    } catch (submitError) {
      setSubmitState("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your membership request.",
      );
    }
  };

  return (
    <>
      {showToast ? (
        <div className="fixed right-4 top-4 z-50 min-w-[260px] rounded-xl bg-[#0A1F44] px-4 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10">
          Member registration submitted successfully.
        </div>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-28px_rgba(0,0,0,0.7)] backdrop-blur-md"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            id="companyName"
            label="Company / Dealership Name"
            placeholder="Eg: Mahalakshmi Motors"
            value={values.companyName}
            onChange={handleChange}
          />

          <FormField
            id="representativeName"
            label="Contact Person Name"
            placeholder="Eg: Anitha Kumar"
            value={values.representativeName}
            onChange={handleChange}
          />

          <FormField
            id="email"
            label="Email"
            placeholder="you@company.com"
            value={values.email}
            onChange={handleChange}
            type="email"
          />

          <FormField
            id="phone"
            label="Phone Number"
            placeholder="9876543210"
            value={values.phone}
            onChange={handleChange}
            type="tel"
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80" htmlFor="state">
              State
            </label>
            <select
              id="state"
              name="state"
              value={values.state}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white focus:border-[#72bf44] focus:outline-none"
            >
              <option value="" className="text-zinc-900">
                Select state
              </option>
              {indiaStates.map((stateName) => (
                <option key={stateName} value={stateName} className="text-zinc-900">
                  {stateName}
                </option>
              ))}
            </select>
          </div>

          <FormField
            id="city"
            label="City"
            placeholder="Chennai"
            value={values.city}
            onChange={handleChange}
          />
        </div>

        <FormField
          id="pincode"
          label="Pincode"
          placeholder="600001"
          value={values.pincode}
          onChange={handleChange}
        />

        <p className="rounded-xl bg-white/10 px-4 py-3 text-xs text-white/80">
          After you submit this form, our team will contact you to assist with the membership
          process.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex w-full items-center justify-center rounded-xl 
          bg-gradient-to-r from-[#6fbe44] to-[#4c9f1f] 
          px-4 py-3 text-sm font-semibold text-white 
          transition-all duration-200 ease-in-out
          hover:brightness-110 hover:scale-[1.02]
          active:scale-[0.98]
          focus:outline-none focus:ring-2 focus:ring-[#72bf44]/60 focus:ring-offset-0 
          disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitState === "submitting" ? "Submitting..." : "Submit"}
        </button>
          {/* {submitState === "success" ? (
            <span className="text-sm font-medium text-emerald-300">
              Submitted. TVS Certified staff will contact you shortly.
            </span>
          ) : null} */}
        </div>

        {error ? <p className="text-sm font-medium text-rose-300">{error}</p> : null}
      </form>
    </>
  );
}

function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  id: keyof FormFields;
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white/80" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#72bf44] focus:outline-none"
      />
    </div>
  );
}
