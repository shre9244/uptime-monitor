"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function addService(formData: FormData) {
  const name = formData.get("name") as string;
  const url = formData.get("url") as string;

  if (!name || !url) return;

  await prisma.service.create({
    data: {
      name,
      url,
      status: "UP",
    },
  });

  redirect("/dashboard");
}
