import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gray-100">
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
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="relative w-full max-h-screen bg-black opacity-75">
          <Image
            src="/assets/aboutbackground.png" // Add your image in the public folder
            alt="Industry background"
            width={10000}
            height={10000}
            objectFit="cover"
            className="opacity-40 max-h-screen w-full"
          />
        </div>
        <div className="absolute top-32 left-0 w-full h-72 flex flex-col justify-center items-center px-4 text-center">
         <h1 className='text-7xl font-newsreader font-medium'>
          About Us
         </h1>
          <p className="mt-6 text-2xl max-w-4xl font-plusJakarta">
          Growing up, we witnessed firsthand the challenges faced by our families in the industrial sector.
           From inefficiencies in procurement processes to on-site frauds to the constant struggle of finding
            reliable vendors, these pain points were a daily reality. Inspired by these experiences, and driven 
            by a passion to make a difference, we embarked on a mission to transform the industry.  Workwise brings
             together over four decades of rich experience with the innovative energy of young talent from IIT and VIT.
              This unique blend of expertise and fresh perspectives allows us to create MAGIC.  Whether you're a buyer 
             seeking reliable vendors or a vendor looking to expand your reach, Workwise is here to support you every step of the way,
              and become your growth partner.          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-[#D5EAE8] text-center">
        <h2 className="text-4xl  font-semibold  mb-4  font-newsreader">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-black  text-4xl mb-8 font-newsreader">
          Building the Future of B2B Procurement
        </p>
        <p className="max-w-4xl mx-auto text-black  text-lg mb-8 font-plusJakarta">
        At Workwise, we aim to revolutionize the Indian heavy industry by bridging gaps in technical,
         financial, operational, and market access challenges.   Starting with solutions for contractors
          and vendors, we focus on making procurement cheaper, faster, and more efficient. As a growth partner,
           we envision a future where
        </p>
        <div className="flex justify-center md:flex-row flex-col space-x-8">
          <div className="p-5 bg-[#82B8CD] rounded-xl shadow-lg shadow-[#82B8CD]">
            <p>Drive company-wide efficiencies</p>
          </div>
          <div className="p-5 bg-[#82B8CD] rounded-xl shadow-lg shadow-[#82B8CD]">
            <p>Bridge the gap between suppliers and buyers</p>
          </div>
          <div className="p-5 bg-[#82B8CD] rounded-xl shadow-lg shadow-[#82B8CD]">
            <p>Reduce procurement costs</p>
          </div>
          <div className="p-5 bg-[#82B8CD] rounded-xl shadow-lg shadow-[#82B8CD]">
            <p>Reduce procurement costs</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-[#82B8CD]  text-center">
        <h2 className="text-4xl font-semibold font-newsreader mb-2">Our Mission</h2>
        <p className="max-w-8xl font-newsreader  text-4xl mx-auto text-black mb-6">
          At workwise, our mission is twofold
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-[#1A4353] rounded-lg shadow-md">
            <h3 className="text-3xl font-newsreader text-[#FFF1B2] font-medium">Empowering Contractors/Clients</h3>
            <p className="mt-5 max-w-lg text-white">
              Save 5% on procurement costs for industrial consumers by offering data-driven solutions and expertise.
            </p>
            <p className="mb-5 max-w-lg text-white">
            ⁠Streamline procurement processes, freeing up 90% of time for strategic activities
            </p>
          </div>
          <div className="p-6 bg-[#1A4353] rounded-lg shadow-md">
            <h3 className="text-3xl font-newsreader text-[#FFF1B2] font-medium">Empowering Contractors/Clients</h3>
            <p className="mt-5 max-w-lg text-white">
            Grow business by 20%, expanding their reach and opportunities
            </p>
            <p className="mb-5 max-w-lg text-white">
            Connect with contractors seamlessly, ensuring a steady pipeline of orders
                        </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#D5EAE8] text-center">
        <h2 className="text-2xl font-bold mb-4 font-newsreader">Meet our team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-4">
            <Image
              src="/assets/image 5.png" // Replace with actual images
              alt="Team Member 1"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">Mukul Jatav</h3>
            <p className="text-gray-600">software developer</p>
          </div>
          <div className="p-4">
            <Image
              src="/assets/image 6.png"
              alt="Team Member 2"
              width={150}
              height={150}
              className=" mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">Siddharth Kothari</h3>
            <p className="text-gray-600">software developer</p>
          </div>
          <div className="p-4">
            <Image
              src="/assets/image 7.png"
              alt="Team Member 3"
              width={150}
              height={150}
              className=" mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">Imtiaj</h3>
            <p className="text-gray-600">software developer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-900 text-white text-center">
        <p>
          Join us in shaping the future of the heavy industry. Together, let's build a more efficient, connected, and prosperous ecosystem.
        </p>
      </footer>
    </div>
  );
}
