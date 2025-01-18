"use client"
import { useState, useEffect } from "react";

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

  return (
    <div className="p-8 bg-[#BEE4F3] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Discover Vendors!</h1>

      {/* Search and Filter Section */}
      <div className="flex items-center mb-6 gap-4">
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
      <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
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
