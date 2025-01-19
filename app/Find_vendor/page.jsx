"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from 'react-icons/fa';

const vendorsData = [
  { name: "BluePeak Supplies", category: "Oil", rating: 4.2, priceRange: "Medium" },
  { name: "RapidFlow Distributors", category: "Steel", rating: 3.8, priceRange: "High" },
  { name: "Vertex Industrial", category: "Oil", rating: 4.0, priceRange: "Low" },
  { name: "MetroCore Suppliers", category: "Cement", rating: 4.1, priceRange: "High" },
  { name: "ProAxis Tools", category: "Steel", rating: 3.5, priceRange: "Medium" },
];

export default function FindVendors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVendors, setFilteredVendors] = useState(vendorsData);

  useEffect(() => {
    // Filter vendors based on the search term
    const filtered = vendorsData.filter((vendor) =>
      vendor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVendors(filtered);
  }, [searchTerm]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="p-8 bg-[#BEE4F3] min-h-screen">
       {/* Sidebar */}
       <div
        className={`fixed top-0 left-0 h-full bg-[#2F4858] transition-width duration-300 overflow-x-hidden ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <div className="p-5">
          <button
            onClick={toggleSidebar}
            className="text-black text-2xl focus:outline-none"
          >
            <FaBars />
          </button>

          {isSidebarOpen && (
            <>
              <h2 className="text-xl font-bold mb-5">Menu</h2>
              <ul className="list-none space-y-4">
                <li>
                  <Link href="/Productcomparison">product details and comparison</Link>
                </li>
                <li>
                  <Link href="/">Inquiries received</Link>
                </li>
                <li>
                  <Link href="/Rfqmanagement">RFQ Management</Link>
                </li>
                <li>
                  <Link href="/Find_vendor">Find Vendor</Link>
                </li>
                <li>
                  <Link href="/Review">Reviews and ratings</Link>
                </li>
                <li>
                  <Link href="/CreateRfq">Create RFQ</Link>
                </li>
              </ul>
              <button
                className="mt-10 bg-red-500 text-white px-4 py-2 rounded"
              >
                Sign out
              </button>
            </>
          )}
        </div>
      </div>
       {/* Navbar section */}
       <div className='navbar justify-between flex  w-full 
        md:h-16 h-16 ml-9 bg-[#ade3fb] bg-opacity-40'>
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
      <h1 className="text-3xl font-bold mb-6 ml-10">Discover Vendors!</h1>

      {/* Search and Filter Section */}
      <div className="flex items-center mb-6 gap-4 ml-10">
        <input
          type="text"
          placeholder="Search by vendor name..."
          className="w-80 h-10 border rounded-lg px-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-40 h-10 border rounded-lg px-2"
          onChange={(e) =>
            setFilteredVendors(
              e.target.value === "All"
                ? vendorsData
                : vendorsData.filter((vendor) => vendor.category === e.target.value)
            )
          }
        >
          <option value="All">All Categories</option>
          <option value="Oil">Oil</option>
          <option value="Steel">Steel</option>
          <option value="Cement">Cement</option>
        </select>
      </div>

      {/* Vendor Table */}
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg ml-10 overflow-x-hidden overflow-y-hidden">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border p-4">Vendor Name</th>
            <th className="border p-4">Category</th>
            <th className="border p-4">Rating</th>
            <th className="border p-4">Price Range</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendors.map((vendor, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border p-4">{vendor.name}</td>
              <td className="border p-4">{vendor.category}</td>
              <td className="border p-4">{vendor.rating}</td>
              <td className="border p-4">{vendor.priceRange}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* If no results found */}
      {filteredVendors.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No vendors found.</p>
      )}
    </div>
  );
}
