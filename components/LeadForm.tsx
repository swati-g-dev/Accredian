"use client";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  employees: "",
  program: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-blue-950">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            Let&apos;s Build Your Learning Program
          </h2>
          <p className="text-blue-200 max-w-lg mx-auto">
            Fill out the form below and our enterprise team will reach out within
            24 hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-500/20 border border-green-400/40 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Thank You!
            </h3>
            <p className="text-green-200">
              We&apos;ve received your request. Our team will contact you within 24
              hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 grid md:grid-cols-2 gap-5"
          >
            {[
              { name: "name", label: "Full Name*", type: "text", placeholder: "Rahul Sharma" },
              { name: "email", label: "Work Email*", type: "email", placeholder: "rahul@company.com" },
              { name: "company", label: "Company Name*", type: "text", placeholder: "Acme Corp" },
              { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-blue-200 mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.label.includes("*")}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400 transition"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">
                Team Size
              </label>
              <select
                name="employees"
                value={form.employees}
                onChange={handleChange}
                className="w-full bg-blue-900 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-400 transition"
              >
                <option value="">Select size</option>
                <option value="1-50">1–50</option>
                <option value="51-200">51–200</option>
                <option value="201-500">201–500</option>
                <option value="500+">500+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1.5">
                Program Interest
              </label>
              <select
                name="program"
                value={form.program}
                onChange={handleChange}
                className="w-full bg-blue-900 border border-white/20 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-400 transition"
              >
                <option value="">Select program</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="data-science">Data Science</option>
                <option value="product">Product Management</option>
                <option value="business-analytics">Business Analytics</option>
                <option value="leadership">Leadership & Management</option>
                <option value="other">Other / Multiple</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-blue-200 mb-1.5">
                Additional Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your learning goals..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-blue-300/50 text-sm focus:outline-none focus:border-blue-400 transition resize-none"
              />
            </div>

            {status === "error" && (
              <p className="md:col-span-2 text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-500 hover:bg-blue-400 disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition text-sm"
              >
                {status === "loading" ? "Submitting..." : "Request a Free Demo →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}