import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className='relative '>
      <div className="background-image absolute inset-0 " >
        <Image
          src="/assets/landingpage.png" 
          alt="Landing Page"
          width={2000}
          height={2000}
          className='w-full max-h-screen'
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
          <div className='text w-2/5'>

          </div>
          <div className='box w-3/5 lg:h-[88vh] md:h-[80vh] flex justify-start items-end bg-black bg-opacity-40'>

          </div>
        </div>
      </div></div>
    </div>
  );
};

export default Page;
