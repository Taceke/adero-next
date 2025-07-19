// components/forms/ApplyJobForm.tsx
"use client";

import { useForm } from "react-hook-form";

type ApplyJobFormData = {
  full_name: string;
  email: string;
  resume: FileList;
};

export default function ApplyJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyJobFormData>();

  const onSubmit = async (data: ApplyJobFormData) => {
    const formData = new FormData();
    formData.append("full_name", data.full_name);
    formData.append("email", data.email);
    formData.append("resume", data.resume[0]);

    await fetch("/api/jobs/apply", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("full_name", { required: true })}
        placeholder="Full Name"
        className="border border-black p-2 w-full"
      />
      {errors.full_name && <p className="text-red-500">Full name is required</p>}

      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
        className="border border-black p-2 w-full"
      />
      {errors.email && <p className="text-red-500">Email is required</p>}

      <input
        {...register("resume", { required: true })}
        type="file"
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
      />
      {errors.resume && <p className="text-red-500">Resume required</p>}

      <button type="submit" className="bg-primary text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
