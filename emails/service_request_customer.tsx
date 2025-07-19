import nodemailer from "nodemailer";
import { getEmailTemplate } from "@/lib/sendEmail";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendServiceRequestEmail = async (formData: any) => {
  const html = getEmailTemplate("service_request_customer", {
    name: formData.name,
    service: formData.service,
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: "Your Service Request Received",
    html,
  });
};