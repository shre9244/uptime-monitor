export async function explainDowntime(url: string) {
  return `The service at ${url} appears to be down. This could be due to server downtime, DNS issues, network connectivity problems, or temporary maintenance.`;
}
