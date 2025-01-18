"use client"
// pages/register.js
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Welcome Back!</h2>
        <p className="mt-4">To keep connected with us please login with your personal info</p>
        <button className="mt-6 px-6 py-2 bg-yellow-500 rounded">Login</button>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-yellow-50 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold">Create Account</h2>
        <div className="flex mt-4 space-x-4">
          <button className="bg-gray-100 p-2 rounded">F</button>
          <button className="bg-gray-100 p-2 rounded">G</button>
          <button className="bg-gray-100 p-2 rounded">L</button>
        </div>
        <p className="mt-2">or use email for registration</p>

        <form className="mt-6 w-3/4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone no."
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization name"
            value={formData.organization}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="role"
            placeholder="Register As"
            value={formData.role}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded mt-4"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
