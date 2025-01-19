import Link from 'next/link';
import Image from 'next/image';
export default function Login() {
  return (
      <div className="bg-[#FFF1B2]  rounded-lg shadow-lg flex min-h-screen w-full">
        {/* Login Section */}
        <div className="flex-1 px-8 mt-16">
          <h2 className="text-4xl font-semibold mb-4 text-center font-newsreader">Login to Your Account</h2>
          <p className="text-gray-700 mb-4 text-xl text-center font-newsreader">Login using social networks</p>
          <div className="flex space-x-4 mb-4 justify-center items-center">
              <Image 
              src="/assets/facebook.png"
              width={5000}
              height={5000}
              alt="facebook"
              className='w-8 h-8 rounded-full cursor-pointer'
              ></Image>
            <Image 
              src="/assets/google.png"
              width={5000}
              height={5000}
              alt="google"
              className='w-8 h-8 rounded-full cursor-pointer'
              ></Image>
             <Image 
              src="/assets/linkedin.png"
              width={5000}
              height={5000}
              alt="linkedin"
              className='w-8 h-8 rounded-full cursor-pointer'
              ></Image>
          </div>
          <p className="text-gray-600 text-center font-newsreader mb-8">----------- OR ------------</p>
          <form>
            <div className="mb-6 flex items-center justify-center">
              <input
                type="email"
                placeholder="Email"
                className="w-80 p-3 border rounded-lg focus:outline-none bg-black opacity-60"
                required
              />
            </div>
            <div className="mb-6 flex items-center  flex-col justify-center">
              <input
                type="password"
                placeholder="Password"
                className="w-80  p-3 border rounded-lg focus:outline-none text-black bg-black opacity-60"
                required
              />
               <div className="mb-2 text-left">
              <Link href="/forgot-password" legacyBehavior>
                <a className="text-sm text-[#0A66C2] hover:underline">Forgot email or password?</a>
              </Link>
            </div>
            </div>
            <div className='flex justify-center items-center'>
            <button
              type="submit"
              className="w-36  bg-[#1A4353] p-3 rounded-lg text-[#FFF1B2]"
            >
              Login
            </button></div>
          </form>
        </div>

        {/* Register Section */}
        <div className="w-1/3 bg-[#1A4353] text-white p-8 hidden md:flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold mb-4 font-newsreader">Are You New Here?</h2>
          <p className="text-gray-300 mb-6">Sign up and discover what you can do</p>
          <Link href="/register" legacyBehavior>
            <a className="bg-[#FFF1B2] text-blue-900 font-semibold py-2 px-4 rounded-lg ">
              Register
            </a>
          </Link>
        </div>
      </div>
  );
}
