"use server";

import { prisma } from "@/lib/prisma";
import { checkUptime } from "@/lib/checkUptime";
import { redirect } from "next/navigation";

export async function checkAllServices() {
  const services = await prisma.service.findMany();

  for (const service of services) {
    await checkUptime(service.id, service.url);
  }

  redirect("/dashboard");
}
