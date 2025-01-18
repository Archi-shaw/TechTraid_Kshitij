import React from 'react'

const page = () => {
  return (
       <section className="py-12 bg-yellow-100 text-center">
        <h2 className="text-2xl font-bold">Portal Demo</h2>
        <p className="mt-2 text-lg">See our platform in action</p>

        <div className="mt-6 flex justify-center">
          <div className="relative w-3/4">
            <img
              src="/demo-thumbnail.jpg"
              alt="Portal Demo Thumbnail"
              className="w-full rounded shadow"
            />
            <a
              href="https://www.youtube.com/watch?v=example"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex justify-center items-center"
            >
              <button className="bg-red-600 text-white p-4 rounded-full">
                ▶
              </button>
            </a>
          </div>
        </div>
      </section>
  )
}

export default page
