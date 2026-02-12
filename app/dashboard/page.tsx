export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">📊 Uptime Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Services</p>
          <p className="text-2xl font-semibold">3</p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Up</p>
          <p className="text-2xl font-semibold text-green-600">2</p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Down</p>
          <p className="text-2xl font-semibold text-red-600">1</p>
        </div>
      </div>

      {/* Services List */}
      <div className="border rounded-lg">
        <div className="border-b px-4 py-2 font-semibold">
          Monitored Services
        </div>

        <div className="p-4 space-y-2">
          <div className="flex justify-between">
            <span>example.com</span>
            <span className="text-green-600 font-medium">Up</span>
          </div>

          <div className="flex justify-between">
            <span>api.example.com</span>
            <span className="text-red-600 font-medium">Down</span>
          </div>

          <div className="flex justify-between">
            <span>status.example.com</span>
            <span className="text-green-600 font-medium">Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}
