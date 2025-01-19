import Image from "next/image"

const page = () => {
  return (
    <div className='bg-[#F5F2D7] w-full min-h-screen'>
    <div className=' text text-center text-5xl font-newsreader pt-12'>
    Work Smart with Workwise!
    </div>
    <div className=" w-full">
        <div className="relative flex w-1/2 flex-col items-center mt-10">
        <div className="relative w-64 h-64">
        <Image 
          src="/assets/cloud.png" 
          alt="Cloud"
          width={2000}
          height={2000} // Ensures the image fills the container
          objectFit="cover" // Ensures the image covers the container
          className='w-44 h-44 relative right-56 bottom-3'></Image>
         <div className=" relative bottom-40 right-64 z-10">
          <h1 className="text-lg font-bold text-black font-plusJakarta text-center">
          Why work <br /> with us? 
         </h1>
          </div></div>
            <Image 
          src="/assets/confused.png" 
          alt="Cloud"
          width={2000}
          height={2000}
          className=' relative w-64 h-64 bottom-28 right-96'></Image>
        </div>
        {/* <div className="details relative flex flex-col gap-8">
        <div className="w-72 h-16 bg-[#1A4353] rounded-xl flex flex-row gap-3 mt-12">

        </div>
        </div> */}
        </div>
    </div>
  )
}

export default page