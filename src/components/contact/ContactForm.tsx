"use client";

import { useState } from "react";
import { indiaStates } from "@/data/indiaStates";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);

    const form = new FormData(event.currentTarget);
    const payload = {
      name: form.get("name")?.toString() ?? "",
      email: form.get("email")?.toString() ?? "",
      phone: form.get("phone")?.toString() ?? "",
      trustedPartner: form.get("trustedPartner")?.toString() ?? "",
      state: form.get("state")?.toString() ?? "",
      message: form.get("message")?.toString() ?? "",
    };

    try {
      const res = await fetch("/form/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Unable to send message right now.");
      }

      setState("success");
      setShowToast(true);
      // event.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    } finally {
      setTimeout(() => setState("idle"), 2500);
      setTimeout(() => setShowToast(false), 3000);
    }
  }

  return (
    <>
      {showToast && (
        <div className="fixed right-4 top-4 z-50 min-w-[240px] rounded-xl bg-[#0A1F44] px-4 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10">
          ✅ Thank you! Your message was sent successfully.
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <FormField id="name" label="Full name" placeholder="Enter your name" />
        <FormField id="email" label="Email address" placeholder="you@example.com" type="email" />
        <FormField id="phone" label="Phone Number" placeholder="+91 90000 00000" type="tel" />
        <div className="space-y-2">
          <label
            className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70"
            htmlFor="state"
          >
            State
          </label>
          <select
            id="state"
            name="state"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#72bf44] focus:outline-none"
            defaultValue=""
            required
          >
            <option value="" disabled className="text-zinc-800">
              Select your state
            </option>
            {indiaStates.map((stateName) => (
              <option key={stateName} className="text-zinc-800" value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70"
            htmlFor="trustedPartner"
          >
            Category
          </label>
          <select
            id="trustedPartner"
            name="trustedPartner"
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#72bf44] focus:outline-none"
            defaultValue=""
            required
          >
            <option value="" disabled className="text-zinc-800">
              Select a Category
            </option>
            <option className="text-zinc-800" value="General Enquiry">
              General Enquiry
            </option>
            <option className="text-zinc-800" value="Membership/Registration">
              Membership/Registration
            </option>
            <option className="text-zinc-800" value="Buying Vehicles">
              Buying Vehicles
            </option>
            <option className="text-zinc-800" value="Selling Vehicles">
              Selling Vehicles
            </option>
            <option className="text-zinc-800" value="Auction Support">
              Auction Support
            </option>
            <option className="text-zinc-800" value="Document/RC Support">
              Document/RC Support
            </option>
            <option className="text-zinc-800" value="Yard/Parking Services">
              Yard/Parking Services
            </option>
            <option className="text-zinc-800" value="Value-Added Services">
              Value-Added Services
            </option>
          </select>
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us your preferred date and timing."
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#72bf44] focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="group relative inline-flex w-full items-center justify-center rounded-xl 
  bg-gradient-to-r from-[#6fbe44] to-[#4c9f1f] 
  px-4 py-3 text-sm font-semibold text-white 
  transition-all duration-300 ease-out
  hover:scale-[1.03] hover:brightness-110
  active:scale-[0.97]
  focus:outline-none focus:ring-2 focus:ring-[#72bf44]/60 focus:ring-offset-0 
  disabled:opacity-70 overflow-hidden"
        >
          {/* Button Text */}
          <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            {state === "submitting"
              ? "Sending..."
              : state === "success"
                ? "Sent!"
                : "Submit"}
          </span>

          {/* Subtle sliding overlay animation */}
          <span className="absolute inset-0 bg-white/10 translate-x-[-100%] 
    transition-transform duration-300 group-hover:translate-x-0" />
        </button>

        {error && <p className="text-xs font-semibold text-rose-300">{error}</p>}
      </form>
    </>
  );
}

function FormField({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#72bf44] focus:outline-none"
        required
      />
    </div>
  );
}
