import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
       <section className="py-12 bg-yellow-100 text-center">
        <h2 className="text-4xl font-semibold font-newsreader">Portal Demo</h2>
        <p className="mt-3 font-newsreader text-5xl">See our platform in action</p>

        <div className="mt-6 flex justify-center">
          <div className="relative w-3/4">
          <Link href='https://youtu.be/-JPa1MX2HVE'>
            <Image
              src="/assets/demo-thumbnail.png"
              width={10000}
              height={10000}
              alt="Portal Demo Thumbnail"
              className="w-full"
            /> </Link>
          </div>
        </div>
      </section>
  )
}

export default page
