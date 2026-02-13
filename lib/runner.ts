import { checkAllServices } from "./checkUptime";

let started = false;

export function startUptimeRunner() {
  if (started) return;
  started = true;

  console.log("⏱️ Uptime runner started");

  setInterval(async () => {
    await checkAllServices();
    console.log("✅ Uptime check completed");
  }, 60 * 1000); // every 1 minute
}
