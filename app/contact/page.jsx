import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-100 text-center py-12">
        <h1 className="text-3xl font-bold mb-4">We're Here to Help You!</h1>
        <p className="max-w-3xl mx-auto text-gray-700">
          At Workwise, we believe in the power of connection and collaboration. Whether you're a seasoned buyer, a dedicated vendor, or just curious about what we offer, we're here to support you. Our team is always ready to answer your questions, provide assistance, and guide you through our platform.
        </p>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Contact Number</h3>
            <p className="text-gray-600">+91 9876543210</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Office Location</h3>
            <p className="text-gray-600">
              Workwise, Suite 10,
              <br />
              301, Synergy Business Park,
              <br />
              IT Park Road, Mumbai,
              <br />
              Maharashtra - 400060
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-2">Email Address</h3>
            <p className="text-gray-600">info@workwise.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Any questions or remarks? Just write us a message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border rounded-lg"
            />
            <input
              type="phone"
              placeholder="Phone no."
              className="p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded-lg"
            />
            <textarea
              placeholder="Enter your message"
              className="col-span-2 p-3 border rounded-lg h-32"
            />
            <button
              type="submit"
              className="col-span-2 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
