import fs from "fs";
import path from "path";

export const getEmailTemplate = (templateName: string, data: Record<string, string>) => {
  const templatePath = path.join(process.cwd(), "emails", `${templateName}.html`);
  let html = fs.readFileSync(templatePath, "utf-8");

  for (const key in data) {
    const value = data[key];
    html = html.replace(new RegExp(`{{${key}}}`, "g"), value);
  }

  return html;
};