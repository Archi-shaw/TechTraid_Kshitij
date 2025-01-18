// import Link from 'next/link';

// export default function Login() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-yellow-50 p-8 rounded-lg shadow-lg flex max-w-4xl w-full">
//         {/* Login Section */}
//         <div className="flex-1 px-8">
//           <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
//           <p className="text-gray-700 mb-4">Login using social networks</p>
//           <div className="flex space-x-4 mb-6">
//             <button className="bg-blue-600 text-white p-2 rounded-full">
//               F
//             </button>
//             <button className="bg-red-500 text-white p-2 rounded-full">
//               G
//             </button>
//             <button className="bg-blue-400 text-white p-2 rounded-full">
//               in
//             </button>
//           </div>
//           <p className="text-gray-600 text-center mb-4">OR</p>
//           <form>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-3 border rounded-lg focus:outline-none"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-3 border rounded-lg focus:outline-none"
//               />
//             </div>
//             <div className="mb-4 text-right">
//               <Link href="/forgot-password">
//                 <Link className="text-sm text-blue-500 hover:underline">
//                   Forgot email or password?
//                 </Link>
//               </Link>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         {/* Register Section */}
//         <div className="w-1/3 bg-blue-900 text-white p-8 rounded-lg hidden md:flex flex-col items-center justify-center">
//           <h2 className="text-2xl font-bold mb-4">Are You New Here?</h2>
//           <p className="text-gray-300 mb-6">
//             Sign up and discover what you can do
//           </p>
//           <Link href="/register">
//             < Link className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition">
//               Register
//             </Link>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-yellow-50 p-8 rounded-lg shadow-lg flex max-w-4xl w-full">
        {/* Login Section */}
        <div className="flex-1 px-8">
          <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
          <p className="text-gray-700 mb-4">Login using social networks</p>
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-600 text-white p-2 rounded-full">F</button>
            <button className="bg-red-500 text-white p-2 rounded-full">G</button>
            <button className="bg-blue-400 text-white p-2 rounded-full">in</button>
          </div>
          <p className="text-gray-600 text-center mb-4">OR</p>
          <form>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4 text-right">
              <Link href="/forgot-password" legacyBehavior>
                <a className="text-sm text-blue-500 hover:underline">Forgot email or password?</a>
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Register Section */}
        <div className="w-1/3 bg-blue-900 text-white p-8 rounded-lg hidden md:flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Are You New Here?</h2>
          <p className="text-gray-300 mb-6">Sign up and discover what you can do</p>
          <Link href="/register" legacyBehavior>
            <a className="bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-300 transition">
              Register
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
