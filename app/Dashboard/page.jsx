// "use client"
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Chart from '@/app/Dashboard/Chart/page'
// import Latest from '@/app/Dashboard/Latest/page'
// import { useState } from 'react'
// const page = () => {

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//       setIsSidebarOpen(!isSidebarOpen);
//     };

    
//   return (
//     <div className='w-full min-h-screen'>
//       <div className='first_half w-full bg-[#FFF1B2] h-80 '>
//       <div className='Navbar w-full h-16 flex bg-black bg-opacity-30 justify-between'> 
//       <div className='flex flex-row gap-0'>
//       {/* <div className='sidebar pl-2'>
//          <Link href='/'> 
//          <Image
//           src="/assets/sidebar.png" 
//           alt="Landing Page"
//           width={1600}
//           height={1600}
//           className='w-10 h-12 mt-2'
//         />
//         </Link>
//           </div> */}
//           {/* Sidebar */}
// <div
//   className={`fixed top-0 left-0 h-full bg-[#BEE4F3] transition-width duration-300 overflow-x-hidden ${
//     isSidebarOpen ? 'w-64' : 'w-0'
//   }`}
// >
//   <div className="p-5">
//     {/* Sidebar Icon */}
//     <div className="sidebar pl-2">
//       <Link href="/">
//         <Image
//           src="/assets/sidebar.png"
//           alt="Sidebar Icon"
//           width={1600}
//           height={1600}
//           className="w-10 h-12 mt-2"
//         />
//       </Link>
//     </div>

//     {isSidebarOpen && (
//       <>
//         <h2 className="text-xl font-bold mb-5">Menu</h2>
//         <ul className="list-none space-y-4">
//           <li>
//             <Link href="/">product details and comparison</Link>
//           </li>
//           <li>
//             <Link href="/">Inquiries received</Link>
//           </li>
//           <li>
//             <Link href="/">RFQ Management</Link>
//           </li>
//           <li>
//             <Link href="/">Find Vendor</Link>
//           </li>
//           <li>
//             <Link href="/">Reviews and ratings</Link>
//           </li>
//           <li>
//             <Link href="/">Create RFQ</Link>
//           </li>
//         </ul>
//         <button
//           className="mt-10 bg-red-500 text-white px-4 py-2 rounded"
//         >
//           Sign out
//         </button>
//       </>
//     )}
//   </div>
// </div>

//       <div className='logo px-3'>
//          <Link href='/'> 
//          <Image
//           src="/assets/workwiselogo.png" 
//           alt="Landing Page"
//           width={1600}
//           height={1600}
//           className='md:w-36 w-32 md:h-16 h-14 opacity-100 '
//         />
//         </Link>
//           </div>
//           </div>
//           <div className='flex flex-row gap-12 justify-center mt-3'>
//          <div className='input '>
//          <input type="text" id="search" name="magic search" placeholder=" Magic Search"
//           className='outline-none w-80 h-9 rounded-xl'
//           ></input>
//          </div>
//          <div className='icons flex flex-row gap-4 mx-4'>
//          <Link href='/'> 
//          <Image
//           src="/assets/bell.png" 
//           alt="Landing Page"
//           width={1600}
//           height={1600}
//           className='md:w-9  md:h-9 opacity-100 '
//         /></Link>
//          <Link href='/'> 
//          <Image
//           src="/assets/setting.png" 
//           alt="Landing Page"
//           width={1600}
//           height={1600}
//           className='md:w-9 md:h-9 h-14 opacity-100 '
//         /></Link>
//          <Link href='/'> 
//          <Image
//           src="/assets/profile.png" 
//           alt="Landing Page"
//           width={1600}
//           height={1600}
//           className='md:w-9  md:h-9 h-14 opacity-100 '
//         /></Link>
//          </div>
//         </div>
//       </div>
//       <h1 className='heading font-newsreader text-[#1A4353] text-2xl font-extrabold mx-10 mt-6'> DASHBOARD </h1>
//       <div className='half_boxes flex md:flex-row flex-col gap-9 '>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col rounded-xl px-4 py-4 shadow-[black] mx-10 my-5'>
//           <h2 className='text-xl font-medium'>Total Enquiries Received</h2>
//           <div className='flex justify-between'>
//             <h2 className='font-medium text-4xl'> 92 </h2>
//             <Image
//              src="/assets/inquirey.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-16 h-16 bottom-2'
//            />
//           </div>
//         </div>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black] mx-10 my-5'>
//           <h2 className='text-xl font-medium'>Total Quotes <br /> sent</h2>
//           <div className='flex justify-between'>
//             <h2 className='font-medium text-4xl'> 64 </h2>
//             <Image
//              src="/assets/quotes.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-16 h-16 bottom-2'
//            />
//           </div>
//         </div>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black] mx-10  my-5'>
//           <h2 className='text-xl font-medium'>Pending  Quotes</h2>
//           <div className='flex justify-between mt-7'>
//             <h2 className='font-medium text-4xl'> 28 </h2>
//             <Image
//              src="/assets/pending.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-16 h-16 bottom-2 '
//            />
//           </div>
//         </div>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black] mx-10 my-5'>
//           <h2 className='text-xl font-medium'>Total  RFQs</h2>
//           <div className='flex justify-between mt-6'>
//             <h2 className='font-medium text-4xl'> 55 </h2>
//             <Image
//              src="/assets/rfq.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-14 h-14 bottom-2'
//            />
//           </div>
//         </div>
//       </div>
//       </div>
//       <div className='second_half bg-[#BEE4F3] w-full min-h-screen'>
//       <div className='half_boxes flex md:flex-row flex-col gap-9 '>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col rounded-xl px-4 py-4 shadow-[black] mx-10 my-5'>
//           <h2 className='text-xl font-medium'>Total Products</h2>
//           <div className='flex justify-between mt-7'>
//             <h2 className='font-medium text-4xl'> 115 </h2>
//             <Image
//              src="/assets/prod.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-16 h-16 bottom-2'
//            />
//           </div>
//         </div>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black] mx-10 my-5'>
//           <h2 className='text-xl font-medium'>Reviewed  Products  </h2>
//           <div className='flex justify-between mt-7'>
//             <h2 className='font-medium text-4xl'> 100 </h2>
//             <Image
//              src="/assets/review.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-16 h-16 bottom-2'
//            />
//           </div>
//         </div>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black] mx-10  my-5'>
//           <h2 className='text-xl font-medium'>Closed RFQs</h2>
//           <div className='flex justify-between mt-7'>
//             <h2 className='font-medium text-4xl'> 35 </h2>
//             <Image
//              src="/assets/closed.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-16 h-16 bottom-4 '
//            />
//           </div>
//         </div>
//         <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black] mx-10 my-5'>
//           <h2 className='text-xl font-medium'>Pending Review <br/> Products</h2>
//           <div className='flex justify-between mt-2'>
//             <h2 className='font-medium text-4xl '> 55 </h2>
//             <Image
//              src="/assets/pendingproductreview.png" 
//              alt="Landing Page"
//              width={1600}
//              height={1600}
//              className=' relative w-14 h-14 '
//            />
//           </div>
//         </div>
//       </div>
//       <Chart />
//       <Latest />
//       </div>
//     </div>
// //   )
// // }

// export default page
"use client"
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Chart from '@/app/Dashboard/Chart/page';
import Latest from '@/app/Dashboard/Latest/page';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full min-h-screen flex">
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
                  <Link href="/">product details and comparison</Link>
                </li>
                <li>
                  <Link href="/">Inquiries received</Link>
                </li>
                <li>
                  <Link href="/">RFQ Management</Link>
                </li>
                <li>
                  <Link href="/">Find Vendor</Link>
                </li>
                <li>
                  <Link href="/">Reviews and ratings</Link>
                </li>
                <li>
                  <Link href="/">Create RFQ</Link>
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

      {/* Main Content */}
      <div className="flex-1 ml-0 lg:ml-10 transition-margin duration-300">
        <div className="w-full bg-[#FFF1B2] h-80">
          <div className="Navbar w-full h-16 flex  justify-between items-center px-4">
            <button
              onClick={toggleSidebar}
              className="text-white text-2xl focus:outline-none lg:hidden"
            >
              <FaBars />
            </button>

            <div className="flex items-center gap-4">
              {/* <Link href="/">
                <Image
                  src="/assets/sidebar.png"
                  alt="Landing Page"
                  width={1600}
                  height={1600}
                  className="w-10 h-12"
                />
              </Link> */}

              <Link href="/">
                <Image
                  src="/assets/workwiselogo.png"
                  alt="Landing Page"
                  width={1600}
                  height={1600}
                  className="w-36 h-14"
                />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Magic Search"
                className="outline-none w-80 h-9 rounded-xl px-3"
              />

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

          <h1 className="heading font-newsreader text-[#1A4353] text-2xl font-extrabold mx-12 mt-6">
            DASHBOARD
          </h1>

          <div className="flex flex-wrap gap-16 mx-8 p-4">
          <div className="w-52 h-36 bg-white shadow-lg rounded-xl flex flex-col p-4  shadow-[black]  my-5">
              <h2 className="text-xl font-medium">Total Enquiries Received</h2>
              <div className="flex justify-between items-center mt-2">
                <h2 className="font-medium text-4xl">92</h2>
                <Image
                  src="/assets/inquirey.png"
                  alt="Inquiries"
                  width={1600}
                  height={1600}
                  className="w-16 h-16"
                />
              </div>
          </div>
        <div className="w-52 h-36 bg-white shadow-lg rounded-xl flex flex-col p-4  shadow-[black] my-5">
              <h2 className="text-xl font-medium">Total Quotes Sent</h2>
              <div className="flex justify-between items-center mt-2">
                <h2 className="font-medium text-4xl">64</h2>
                <Image
                  src="/assets/quotes.png"
                  alt="Quotes"
                  width={1600}
                  height={1600}
                  className="w-16 h-16"
                />
              </div>
        </div>
        <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black]   my-5'>
          <h2 className='text-xl font-medium'>Pending  Quotes</h2>
          <div className='flex justify-between mt-7'>
            <h2 className='font-medium text-4xl'> 28 </h2>
            <Image
             src="/assets/pending.png" 
             alt="Landing Page"
             width={1600}
             height={1600}
             className=' relative w-16 h-16 bottom-2 '
           />
          </div>
        </div>
        <div className='w-52 h-36 bg-white shadow-lg flex flex-col  rounded-xl px-4 py-4 shadow-[black]  my-5'>
          <h2 className='text-xl font-medium'>Total  RFQs</h2>
          <div className='flex justify-between mt-6'>
            <h2 className='font-medium text-4xl'> 55 </h2>
            <Image
             src="/assets/rfq.png" 
             alt="Landing Page"
             width={1600}
             height={1600}
             className=' relative w-14 h-14 bottom-2'
           />
          </div>
        </div>
          </div>
        </div>

        <div className="second_half bg-[#BEE4F3] w-full min-h-screen p-4">
          <Chart />
          <Latest />
        </div>
      </div>
    </div>
  );
}
