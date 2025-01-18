"use client"
import React, { useState } from "react";

const MyProfile = () => {
  const [profile, setProfile] = useState({
    companyName: "",
    department: "",
    country: "",
    state: "",
    city: "",
    location: "",
    zipCode: "",
    gstNumber: "",
    cinNumber: "",
    profileDescription: "",
    linkedinPage: "",
    facebookPage: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", profile);
    alert("Profile Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Header */}
      <header className="bg-yellow-100 p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-700">My Profile</h1>
      </header>

      <div className="max-w-5xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition">
              Edit 
            </button>
          </div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          {/* Company Information */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Company Information
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="companyName"
                value={profile.companyName}
                onChange={handleChange}
                placeholder="Company Name *"
                className="p-3 border rounded-md"
                required
              />
              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleChange}
                placeholder="Department Name *"
                className="p-3 border rounded-md"
                required
              />
              <select
                name="country"
                value={profile.country}
                onChange={handleChange}
                className="p-3 border rounded-md"
                required
              >
                <option value="">Select Country *</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <select
                name="state"
                value={profile.state}
                onChange={handleChange}
                className="p-3 border rounded-md"
                required
              >
                <option value="">Select State *</option>
                <option value="California">California</option>
                <option value="New York">New York</option>
                <option value="Delhi">Delhi</option>
              </select>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleChange}
                placeholder="City *"
                className="p-3 border rounded-md"
                required
              />
              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                placeholder="Location *"
                className="p-3 border rounded-md"
                required
              />
              <input
                type="text"
                name="zipCode"
                value={profile.zipCode}
                onChange={handleChange}
                placeholder="Zip Code *"
                className="p-3 border rounded-md"
                required
              />
              <input
                type="text"
                name="gstNumber"
                value={profile.gstNumber}
                onChange={handleChange}
                placeholder="Enter GSTIN"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                name="cinNumber"
                value={profile.cinNumber}
                onChange={handleChange}
                placeholder="Enter CIN"
                className="p-3 border rounded-md"
              />
            </div>
          </div>

          {/* Profile Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Profile</h2>
            <textarea
              name="profileDescription"
              value={profile.profileDescription}
              onChange={handleChange}
              placeholder="Add a short description (optional)"
              className="w-full p-3 border rounded-md"
              rows="4"
            />
          </div>

          {/* Social Info */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              Social Info (Optional)
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                name="linkedinPage"
                value={profile.linkedinPage}
                onChange={handleChange}
                placeholder="Enter LinkedIn Page"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                name="facebookPage"
                value={profile.facebookPage}
                onChange={handleChange}
                placeholder="Enter Facebook Page"
                className="p-3 border rounded-md"
              />
              <input
                type="text"
                name="website"
                value={profile.website}
                onChange={handleChange}
                placeholder="Enter Company Website"
                className="p-3 border rounded-md"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
