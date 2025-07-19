import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { fullname, email, service, message } = await req.json();

    const newMessage = await prisma.message.create({
      data: {
        name: fullname,
        email,
        message,
        service: {
          connectOrCreate: {
            where: { name: service },
            create: { name: service, detail: "", img: "" }, // 👈 supply empty img
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save message" },
      { status: 500 }
    );
  }
}
