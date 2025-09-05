import { Status } from "./Utils/Constants";

const LeadsTable = ({
  leads,
  page,
  total,
  limit,
  onPageChange,
  onStatusChange,
  onAddLead,
}) => {
  const totalPages = Math.ceil(total / limit);

  const getStatusStyles = (status) => {
    const styles = {
      [Status.NEW]:
        "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-blue-200",
      [Status.CONTACTED]:
        "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-200",
      [Status.QUALIFIED]:
        "bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-emerald-200",
      [Status.REJECTED]:
        "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-red-200",
    };
    return styles[status] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Lead Management
            </h2>
            <p className="text-gray-600">
              Track and manage your sales prospects
            </p>
          </div>
          <button
            onClick={onAddLead}
            className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 font-medium"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add New Lead
            </span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-gray-900">{total}</div>
            <div className="text-sm text-gray-500">Total Leads</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">
              {leads.filter((l) => l.status === Status.NEW).length}
            </div>
            <div className="text-sm text-gray-500">New</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-amber-600">
              {leads.filter((l) => l.status === Status.CONTACTED).length}
            </div>
            <div className="text-sm text-gray-500">Contacted</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-2xl font-bold text-emerald-600">
              {leads.filter((l) => l.status === Status.QUALIFIED).length}
            </div>
            <div className="text-sm text-gray-500">Qualified</div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Phone No
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leads.length > 0 ? (
                  leads.map((lead, index) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-sm font-medium text-gray-700 group-hover:from-blue-100 group-hover:to-indigo-100 group-hover:text-blue-700 transition-all">
                          {(page - 1) * limit + index + 1}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          {/* <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                              {lead.firstName?.[0]}
                              {lead.lastName?.[0]}
                            </div>
                          </div> */}
                          <div>
                            <div className="text-sm font-semibold text-gray-900">
                              {`${lead.firstName} ${lead.lastName}`}
                            </div>
                            {/* <div className="text-sm text-gray-500">
                              {lead.email}
                            </div> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="text-sm text-gray-900 font-medium">
                          {lead.email}
                        </div>
                       
                      </td>
                      <td className="px-6 py-5">
                        
                        <div className="text-sm text-gray-900 font-medium flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {lead.phone}
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${getStatusStyles(
                            lead.status
                          )}`}
                        >
                          <span className="w-2 h-2 bg-white rounded-full mr-2 opacity-80"></span>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            onStatusChange(lead.id, e.target.value)
                          }
                          className="appearance-none bg-white border-2 border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-200 cursor-pointer"
                        >
                          {Object.values(Status).map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-12">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          No leads found
                        </h3>
                        <p className="text-gray-500">
                          Start by adding your first lead to get started
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Enhanced Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-600 font-medium">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {(page - 1) * limit + 1}
                  </span>{" "}
                  to{" "}
                  <span className="font-semibold text-gray-900">
                    {Math.min(page * limit, total)}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-900">{total}</span>{" "}
                  results
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    disabled={page === 1}
                    onClick={() => onPageChange(page - 1)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      page === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    Previous
                  </button>

                  <div className="hidden sm:flex space-x-1">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum = i + 1;
                      if (totalPages > 5 && page > 3) {
                        pageNum = page - 2 + i;
                        if (pageNum > totalPages) pageNum = totalPages - 4 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => onPageChange(pageNum)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                            page === pageNum
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
                              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    disabled={page === totalPages}
                    onClick={() => onPageChange(page + 1)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      page === totalPages
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow"
                    }`}
                  >
                    Next
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;
