import { prisma } from "./prisma";
import { explainDowntime } from "./aiExplain";

export async function checkUptime(url: string) {
  try {
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    return res.ok ? "UP" : "DOWN";
  } catch (err) {
    return "DOWN";
  }
}

export async function checkAllServices() {
  const services = await prisma.service.findMany();

  for (const service of services) {
    const status = await checkUptime(service.url);

    // 👇 THIS IS THE AI CONNECTION PART
    if (status === "DOWN") {
      const reason = await explainDowntime(service.url);

      await prisma.service.update({
        where: { id: service.id },
        data: {
          status,
          lastCheckedAt: new Date(),
          lastErrorReason: reason,
        },
      });
    } else {
      await prisma.service.update({
        where: { id: service.id },
        data: {
          status,
          lastCheckedAt: new Date(),
          lastErrorReason: null,
        },
      });
    }
  }
}
