import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="relative w-full h-72">
          <Image
            src="/path-to-your-image.jpg" // Add your image in the public folder
            alt="Industry background"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-72 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl font-bold">
            Empowering Industries with Seamless Procurement Solutions
          </h1>
          <p className="mt-4 max-w-2xl">
            We tackle the challenges of the heavy industry by digitizing and optimizing procurement processes, offering insights, and driving operational efficiency.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8">
          Building the Future of B2B Procurement
        </p>
        <div className="flex justify-center space-x-8">
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <p>Drive company-wide efficiencies</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <p>Bridge the gap between suppliers and buyers</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <p>Reduce procurement costs</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8">
          At workwise, our mission is twofold
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Empowering Communities</h3>
            <p className="mt-2 text-gray-600">
              Save 5% on procurement costs for industrial consumers by offering data-driven solutions and expertise.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Empowering Collaboration</h3>
            <p className="mt-2 text-gray-600">
              Increase supplier engagement by 20%, reducing costs and creating a seamlessly connected ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Meet our team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-4">
            <Image
              src="/team-member1.jpg" // Replace with actual images
              alt="Team Member 1"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">Role</p>
          </div>
          <div className="p-4">
            <Image
              src="/team-member2.jpg"
              alt="Team Member 2"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Role</p>
          </div>
          <div className="p-4">
            <Image
              src="/team-member3.jpg"
              alt="Team Member 3"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold">Chris Brown</h3>
            <p className="text-gray-600">Role</p>
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
