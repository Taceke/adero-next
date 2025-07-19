// app/apply_job/[id]/page.tsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function ApplyJobPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files) {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    if (formData.resume) {
      data.append("resume", formData.resume);
    }

    try {
      const res = await fetch(`/api/apply_job/${id}`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Failed to apply");

      alert("Application submitted successfully!");
      setFormData({ name: "", email: "", resume: null });
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="snap-always snap-center flex md:justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center max-w-96 gap-y-2 rounded-lg bg-white z-50 p-4 w-full"
      >
        {/* Job Info - Replace this with actual fetched data if needed */}
        <div>
          <h1 className="text-md font-medium text-primary inline">Position:</h1>
          <p className="text-sm inline font-medium text-secondary">Job Title Here</p>
          <br />
          <h1 className="text-md font-medium text-primary inline">Description:</h1>
          <p className="inline text-sm">This is the job description here.</p>
        </div>

        {/* Full Name */}
        <div className="flex-col flex items-stretch">
          <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-black">
            Full Name
          </label>
          <input
            className="input px-4 py-2 rounded-md bg-gray-100 ring-primary ring-1 outline-primary focus:outline-double"
            placeholder="John Doe"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="flex-col flex items-stretch">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
            Email Address
          </label>
          <input
            className="input px-4 py-2 rounded-md bg-gray-100 ring-primary ring-1 outline-primary focus:outline-double"
            placeholder="johndoe@example.com"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="flex-col flex items-stretch">
          <label htmlFor="file_input" className="block mb-2 text-sm font-medium text-black">
            Upload Resume
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            id="file_input"
            type="file"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-between text-sm mt-6">
          <button
            type="submit"
            disabled={submitting}
            className="bg-primary rounded-md px-2 py-1 text-white"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
