"use client"
// pages/register.js
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-[#1A4353] text-white flex flex-col  justify-center items-center">
        <h2 className="text-4xl font-bold font-newsreader">Welcome Back!</h2>
        <p className="mt-3 text-lg  font-light">To keep connected with us please login with your personal info</p>
       <Link href="/login">
        <button className="mt-6 px-10 py-2 text-[#1A4353] font-bold bg-[#FFF1B2] rounded">Login</button></Link> 
      </div>
      <div className="w-1/2 bg-[#FFF1B2] flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-2 font-newsreader">Create Account</h2>
        <div className="flex space-x-4 mb-2 justify-center items-center">
                     <Image 
                     src="/assets/facebook.png"
                     width={5000}
                     height={5000}
                     alt="facebook"
                     className='w-8 h-8 rounded-full cursor-pointer'
                     ></Image>
                   <Image 
                     src="/assets/google.png"
                     width={5000}
                     height={5000}
                     alt="google"
                     className='w-8 h-8 rounded-full cursor-pointer'
                     ></Image>
                    <Image 
                     src="/assets/linkedin.png"
                     width={5000}
                     height={5000}
                     alt="linkedin"
                     className='w-8 h-8 rounded-full cursor-pointer'
                     ></Image>
                 </div>
        <p className="mt-2 font-newsreader">------- or use email for registration -----------</p>

        <form className="mt-6 w-3/4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-black opacity-75 mb-4 px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full  bg-black opacity-75 mb-4 px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone no."
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full  bg-black opacity-75 mb-4 px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="organization"
            placeholder="Organization name"
            value={formData.organization}
            onChange={handleChange}
            required
            className="w-full  bg-black opacity-75 mb-4 px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="role"
            placeholder="Register As"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full  bg-black opacity-75 mb-4 px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full   bg-black opacity-75 mb-4 px-4 py-2 border rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full  bg-black opacity-75 mb-4 px-4 py-2 border rounded"
          />
           <div className='flex justify-center items-center'>
          <button
            type="submit"
            className="w-32 bg-[#1A4353] text-[#FFF1B2] font-semibold py-2 rounded mt-4"
          >
            Register
          </button></div>
        </form>
      </div>
    </div>
  );
}
