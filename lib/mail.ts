import nodemailer from "nodemailer";
export const sendAdminEmail = sendEmailAdmins;

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(subject: string, message: string, to: string) {
  return transporter.sendMail({
    from: `"Adero" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: message,
  });
}

export async function sendEmailHtml(subject: string, htmlMessage: string, to: string) {
  return transporter.sendMail({
    from: `"Adero" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: htmlMessage,
  });
}

export async function sendEmailAdmins(subject: string, htmlMessage: string) {
  const admins = process.env.ADMINS?.split(",") || [];
  return transporter.sendMail({
    from: `"Adero Admin" <${process.env.EMAIL_USER}>`,
    to: admins,
    subject,
    html: htmlMessage,
  });
}

export async function sendEmailManagers(subject: string, htmlMessage: string) {
  const managers = process.env.MANAGERS?.split(",") || [];
  return transporter.sendMail({
    from: `"Adero Managers" <${process.env.EMAIL_USER}>`,
    to: managers,
    subject,
    html: htmlMessage,
  });
}
