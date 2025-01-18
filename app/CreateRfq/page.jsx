// components/CreateRFQ.js
export default function CreateRFQ() {
    return (
      <div className="bg-blue-100 min-h-screen p-6">
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Create RFQ</h1>
          <div className="text-gray-500">
            <span className="material-icons">search</span>
          </div>
        </header>
  
        {/* RFQ Form */}
        <div className="max-w-4xl mx-auto bg-blue-200 rounded-lg shadow-lg p-6 space-y-6">
          {/* General RFQ Information */}
          <section className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              GENERAL RFQ INFORMATION
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">RFQ Title</label>
                <input
                  type="text"
                  placeholder="Enter RFQ Title"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Category</label>
                <input
                  type="text"
                  placeholder="Enter Category"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Quantity</label>
                <input
                  type="text"
                  placeholder="Enter Quantity"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Submission Deadline
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Budget</label>
                <input
                  type="text"
                  placeholder="Enter Budget"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </section>
  
          {/* Detailed Specifications */}
          <section className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              DETAILED SPECIFICATIONS
            </h2>
            <textarea
              placeholder="Additional Information"
              className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 h-24"
            ></textarea>
          </section>
  
          {/* Preferred Vendors */}
          <section className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              PREFERRED VENDORS
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Preferred Vendor"
                className="w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add Preferred Vendor
              </button>
            </div>
          </section>
  
          {/* Attachments */}
          <section className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              ATTACHMENTS
            </h2>
            <div className="space-y-2">
              <input
                type="file"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Add Attachments
              </button>
            </div>
          </section>
  
          {/* Submit Button */}
          <div className="text-right">
            <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
  