"use client"
import React, { useState } from "react";

const MagicSearch = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [productName, setProductName] = useState("");
  const [suggestedTerms, setSuggestedTerms] = useState([
    "Temperature Monitoring",
    "IoT Sensors",
    "Thermal Imaging",
    "Smart Thermostats",
    "Data Logger",
  ]);
  const [customTerm, setCustomTerm] = useState("");
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    contactEmail: "",
    jobRole: "",
    category: "",
  });

  const handleAddCustomTerm = () => {
    if (customTerm.trim() !== "") {
      setSuggestedTerms((prev) => [...prev, customTerm]);
      setCustomTerm("");
    }
  };

  const handleContactInfoChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", contactInfo);
    alert("Contact Information Submitted!");
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 p-6">
      {/* Header */}
      <header className="p-4 text-center text-2xl font-extrabold text-gray-700">
        Magic Search
      </header>

      {/* Project Selection Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Select Project
          </label>
          <select
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select Project</option>
            <option value="Project A">Project A</option>
            <option value="Project B">Project B</option>
            <option value="Project C">Project C</option>
          </select>
        </div>

        {/* Review Products */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-inner">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Review Products
          </h2>
          <div>
            <input
              type="text"
              placeholder="Product Name: Temperature or Instruments"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-600">
              Review top products that match your search criteria.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Suggested Terms Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Suggested Terms
        </h2>
        <ul className="list-disc list-inside mb-4">
          {suggestedTerms.map((term, index) => (
            <li key={index} className="text-gray-700">
              {term}
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Add your own term:
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={customTerm}
              onChange={(e) => setCustomTerm(e.target.value)}
              placeholder="Enter your own term"
              className="flex-1 p-2 border rounded-md"
            />
            <button
              onClick={handleAddCustomTerm}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Contact Information
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              value={contactInfo.firstName}
              onChange={handleContactInfoChange}
              placeholder="First Name"
              className="p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              value={contactInfo.lastName}
              onChange={handleContactInfoChange}
              placeholder="Last Name"
              className="p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="companyName"
              value={contactInfo.companyName}
              onChange={handleContactInfoChange}
              placeholder="Company Name"
              className="p-2 border rounded-md"
              required
            />
            <input
              type="email"
              name="contactEmail"
              value={contactInfo.contactEmail}
              onChange={handleContactInfoChange}
              placeholder="Contact Email"
              className="p-2 border rounded-md"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <select
              name="jobRole"
              value={contactInfo.jobRole}
              onChange={handleContactInfoChange}
              className="p-2 border rounded-md"
            >
              <option value="">Job Role</option>
              <option value="Procurement">Procurement</option>
              <option value="Manager">Manager</option>
              <option value="Technician">Technician</option>
            </select>
            <select
              name="category"
              value={contactInfo.category}
              onChange={handleContactInfoChange}
              className="p-2 border rounded-md"
            >
              <option value="">Category</option>
              <option value="Thermometers">Thermometers</option>
              <option value="IoT Devices">IoT Devices</option>
              <option value="Thermal Cameras">Thermal Cameras</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default MagicSearch;
