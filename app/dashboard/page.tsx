import { prisma } from "@/lib/prisma";
import { addService } from "./actions";
import { checkAllServices } from "./check-action";

export default async function DashboardPage() {
  const services = await prisma.service.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900">
        📊 Uptime Dashboard
      </h1>

      {/* Add Service Form */}
      <form
        action={addService}
        className="bg-white border rounded-lg p-4 flex gap-3"
      >
        <input
          name="name"
          placeholder="Service name"
          required
          className="border rounded px-3 py-2 w-40"
        />

        <input
          name="url"
          placeholder="Service URL"
          required
          className="border rounded px-3 py-2 flex-1"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Add Service
        </button>
      </form>

      {/* Check Now Button */}
      <form action={checkAllServices}>
        <button
          type="submit"
          className="text-sm text-gray-600 underline"
        >
          Check Now
        </button>
      </form>

      {/* Stats */}
      <p className="text-sm text-gray-600">
        Total services: {services.length}
      </p>

      {/* Services List */}
      <ul className="space-y-3">
        {services.map((service) => (
          <li
            key={service.id}
            className="border rounded-lg p-4 bg-white"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-900">
                  {service.name}
                </p>
                <p className="text-sm text-gray-500">
                  {service.url}
                </p>
              </div>

              <span
                className={`px-3 py-1 text-sm rounded-full font-medium ${
                  service.status === "UP"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {service.status}
              </span>
            </div>

            {/* Last Checked */}
            {service.lastCheckedAt && (
              <p className="text-xs text-gray-400 mt-2">
                Checked at{" "}
                {service.lastCheckedAt.toLocaleTimeString()}
              </p>
            )}

            {/* AI Explanation */}
            {service.lastErrorReason && (
              <p className="text-sm text-gray-600 mt-2">
                🤖 {service.lastErrorReason}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
