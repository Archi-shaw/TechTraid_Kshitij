import Image from 'next/image';
import Link from 'next/link';
import Worksmart from '@/app/worksmart/page'
import Testimonials from '@/app/Testimonials/page'
import DemoPortal from '@/app/DemoPortal/page'
import FAQ from '@/app/FAQ/page'
const Page = () => {
  return (
    <div>
      <div className='relative'>
      <div className="background-image absolute inset-0 " >
        <Image
          src="/assets/landingpage.png" 
          alt="Landing Page"
          width={2000}
          height={2000}
          className='w-full max-h-full'
        />
      </div>
      <div className='relative z-10 h-full'>
        <div className='navbar justify-between flex  w-full 
        md:h-16 h-16 bg-white bg-opacity-40'>
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
        <div className='body flex flex-row h-full'>
          <div className='text w-2/5 flex flex-col gap-3 justify-start items-end mt-10 mr-5 '>
          <Link href="/">
             <button className='login md:w-24 w-16 h-10 bg-[#1A4353] rounded-3xl md:text-lg
              text-sm font-semibold font-sans
              text-[#FFF1B2] text-center'>
               Home
             </button></Link>
             <Link href="/aboutus">
             <button className='login md:w-28 w-16 h-10 bg-[#1A4353] rounded-3xl md:text-lg
              text-sm font-semibold font-sans
              text-[#FFF1B2] text-center'>
               About Us
             </button></Link>
             <Link href="/services">
             <button className='login md:w-32 w-16 h-10 bg-[#1A4353] rounded-3xl md:text-lg
              text-sm font-semibold font-sans
              text-[#FFF1B2] text-center'>
               Services
             </button></Link>
             <Link href="/contact">
             <button className='login md:w-36 w-16 h-10 bg-[#1A4353] rounded-3xl md:text-lg
              text-sm font-semibold font-sans
              text-[#FFF1B2] text-center'>
               Contact Us
             </button></Link>
          </div>
          <div className='box w-2/3 sm:py-14 flex justify-start items-end overflow-y-hidden bg-black bg-opacity-55'>
            <div className=' flex justify-end items-end flex-col gap-7  mr-16'>
             <div className='text lg:w-4/5 w-3/5 h-1/3 tracking-normal leading-tight text-right
             font-newsreader lg:text-6xl md:text-4xl text-2xl text-white items-end'>
            Boost your profitability with our AI-driven procurement solutions.
            </div> 
            <Link href="/Dashboard">
             <button className='login md:w-36 w-28 h-11 bg-[#FFF1B2] rounded-lg md:text-lg
              text-sm font-semibold font-sans
              text-black text-center'>
               Dashboard
             </button></Link>
             <div className='text w-3/5 h-1/3 text-right font-plusJakarta font-bold
            lg:text-xl sm:text-base text-sm text-white items-end'>
             Start Your 30-day Free Trial Now
             </div> 
            </div>
          </div>
        </div>
      </div>
      </div>  
      <Testimonials />
      <DemoPortal />
      <FAQ />
    </div>
  );
};

export default Page;
