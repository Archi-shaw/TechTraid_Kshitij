import Image from "next/image"

const page = () => {
  return (
    <div className='bg-[#BEE4F3] w-full min-h-screen'>
        <div className='w-1/2'>
        <div className='text'>
         <div className='one text-lg  flex flex-row font-plusJakarta'>
         What customers <br /> say about us? 
         <Image 
          src="/assets/line5.png" 
                   alt="Cloud"
                   width={2000}
                   height={2000}
                   className='w-28 h-2 '></Image>
         </div>
        </div>
        </div>
      <div className='w-1/2 h-'>

      </div>
    </div>
  )
}

export default page
