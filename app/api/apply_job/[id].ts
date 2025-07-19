// /pages/api/apply_job/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import formidable from "formidable";
import fs from "fs";
import path from "path";

// Initialize Prisma
const prisma = new PrismaClient();

// Disable default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Make sure uploads directory exists
const uploadsDir = path.join(process.cwd(), "/public/uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const form = formidable({
    multiples: false,
    uploadDir: uploadsDir,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form:", err);
      return res.status(500).json({ error: "Error processing form data" });
    }

    const name = fields.name?.toString();
    const email = fields.email?.toString();
    const resumeFile = files.resume?.[0] || files.resume; // handle array or single file

    if (!name || !email || !resumeFile) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to database
    try {
      await prisma.jobApplication.create({
        data: {
          jobId: req.query.id as string,
          name,
          email,
          resumeUrl: `/uploads/${path.basename(resumeFile.filepath)}`,
        },
      });

      return res.status(200).json({ message: "Application submitted successfully!" });
    } catch (error) {
      console.error("DB Error:", error);
      return res.status(500).json({ error: "Failed to save application" });
    }
  });
}
