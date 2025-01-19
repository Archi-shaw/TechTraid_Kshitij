import React from 'react'

const page = () => {
  return (
    <div className="bg-[#D4E9F9] py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-black font-newsreader ">What customers say about us?</h2>
        <h3 className="text-3xl font-newsreader">Testimonials</h3>
      </div>
      <div className="flex justify-center bg-gradient-radial from-[#133543] to-white ">
        <div className=" rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 relative">
          <div className="absolute -top-6 left-4">
            <span className="text-4xl font-bold text-[black]">&#10077;</span>
          </div>
          <p className="text-black text-base leading-7">
            As a seasoned contractor in the Oil and Gas industry, I’ve seen it all. Since embracing this portal, my chances of securing tenders have soared by 50%. The seamless process of requesting RFQs, comparing offers, and negotiating the best rates has been a game-changer for my business. This platform is a must for every contractor aiming for success.
          </p>
          <div className="mt-4 text-right">
            <p className="font-bold text-[#1A4353]">Kalyanram Udathu</p>
            <p className="text-sm text-gray-600">CEO - Enerparc India</p>
          </div>
          <div className="absolute -bottom-6 right-4">
            <span className="text-4xl font-bold text-[#1A4353]">&#10078;</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
