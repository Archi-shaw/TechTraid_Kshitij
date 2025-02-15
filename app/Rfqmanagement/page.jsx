// components/RFQManagement.js
import Link from "next/link";
import Image from "next/image";
export default function RFQManagement() {
    return (
      <div className="bg-blue-100 min-h-screen p-6">
         {/* Navbar section */}
         <div className='navbar justify-between flex  w-full 
        md:h-16 h-16 bg-[#ade3fb] bg-opacity-40'>
          <div className='logo px-3'>
         <Link href='/'> 
         <Image
          src="/assets/workwiselogo.png" 
          alt="Landing Page"
          width={1600}
          height={1600}
          className='md:w-36 w-32 md:h-16 h-14 opacity-100 '
        /></Link>
          </div>
          <div className='signup flex flex-row md:gap-7 gap-4 md:px-10 px-3 justify-center items-center'>
            <Link href="/login">
             <button className='login md:w-24 w-16 h-9 bg-[#FFF1B2] rounded-lg md:text-lg
              text-sm font-semibold font-sans
              text-black text-center'>
               Login
             </button></Link>
             <Link href="/register">
             <button className='login md:w-24 w-20 h-9 bg-black rounded-lg md:text-lg text-sm
             font-semibold font-sans text-[#FFF1B2] text-center'>
                Register
             </button></Link>
          </div>
        </div>
        {/* Header Section */}
        <header className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold text-gray-800">RFQ Management</div>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Magic Search"
              className="p-2 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 w-64"
            />
            <div className="text-gray-600 flex space-x-3">
            <div className="flex gap-2">
                <Link href="/">
                  <Image
                    src="/assets/bell.png"
                    alt="Notifications"
                    width={1600}
                    height={1600}
                    className="w-9 h-9"
                  />
                </Link>

                <Link href="/">
                  <Image
                    src="/assets/setting.png"
                    alt="Settings"
                    width={1600}
                    height={1600}
                    className="w-9 h-9"
                  />
                </Link>

                <Link href="/">
                  <Image
                    src="/assets/profile.png"
                    alt="Profile"
                    width={1600}
                    height={1600}
                    className="w-9 h-9"
                  />
                </Link>
              </div>
            </div>
          </div>
        </header>
  
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total RFQ's</h3>
            <p className="text-2xl font-bold text-gray-800">5</p>
            <p className="text-sm text-gray-500">+0 active</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Open RFQ's</h3>
            <p className="text-2xl font-bold text-gray-800">2</p>
            <p className="text-sm text-gray-500">40.0% of total</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total Responses</h3>
            <p className="text-2xl font-bold text-gray-800">15</p>
            <p className="text-sm text-gray-500">3.0 avg per RFQ</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">Total est. Value</h3>
            <p className="text-2xl font-bold text-gray-800">₹340K</p>
            <p className="text-sm text-gray-500">Across all RFQs</p>
          </div>
        </div>
  
        {/* Filters Section */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search RFQ's"
            className="p-2 w-full sm:w-1/3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
          <select className="p-2 w-full sm:w-1/6 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            <option value="all">All statuses</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="in-progress">In Progress</option>
          </select>
          <select className="p-2 w-full sm:w-1/6 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            <option value="all">All categories</option>
            <option value="office">Office Supplies</option>
            <option value="machinery">Machinery</option>
            <option value="furniture">Furniture</option>
            <option value="marketing">Marketing</option>
          </select>
          <input
            type="date"
            className="p-2 w-full sm:w-1/6 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
  
        {/* Table Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-blue-300 text-gray-700">
              <tr>
                <th className="p-3 border-b">Title</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b">Responses</th>
                <th className="p-3 border-b">Deadline</th>
                <th className="p-3 border-b">Estimated Value</th>
                <th className="p-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows */}
              <tr className="hover:bg-gray-100">
                <td className="p-3 border-b">Office Computers</td>
                <td className="p-3 border-b text-green-600 font-semibold">Open</td>
                <td className="p-3 border-b">5</td>
                <td className="p-3 border-b">2023-12-31</td>
                <td className="p-3 border-b">$50,000.00</td>
                <td className="p-3 border-b text-blue-600 hover:underline cursor-pointer">
                  View Details
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-3 border-b">Industrial Machinery</td>
                <td className="p-3 border-b text-green-600 font-semibold">Open</td>
                <td className="p-3 border-b">10</td>
                <td className="p-3 border-b">2024-01-15</td>
                <td className="p-3 border-b">$150,000.00</td>
                <td className="p-3 border-b text-blue-600 hover:underline cursor-pointer">
                  View Details
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="p-3 border-b">Marketing Materials</td>
                <td className="p-3 border-b text-orange-600 font-semibold">
                  In Progress
                </td>
                <td className="p-3 border-b">3</td>
                <td className="p-3 border-b">2024-02-15</td>
                <td className="p-3 border-b">$25,000.00</td>
                <td className="p-3 border-b text-blue-600 hover:underline cursor-pointer">
                  View Details
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Pagination Section */}
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500">
            Previous
          </button>
          <span className="text-gray-600">Page 1 of 1</span>
          <button className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500">
            Next
          </button>
        </div>
      </div>
    );
  }
  