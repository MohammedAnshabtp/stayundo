// "use client";

// import { useRouter } from "next/navigation";
// import { useAuth } from "../../contexts/AuthContext";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { User, Lock, Eye, ArrowRight, Triangle } from "lucide-react";
// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";

// export default function LoginPage() {
//   const router = useRouter();
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

//     if (
//       registeredUser &&
//       (registeredUser.email === email || registeredUser.phone === email) &&
//       registeredUser.password === password
//     ) {
//       login(registeredUser);
//       router.push("/");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-hidden bg-white lg:grid lg:min-h-[90vh] lg:grid-cols-[60%_40%]">
//       {/* LEFT IMAGE SECTION */}
//       <div className="relative hidden lg:block">
//         <Image
//           src="/images/login-banner.png"
//           alt="Kerala Backwaters"
//           fill
//           priority
//           className="object-cover"
//         />

//         {/* Overlay Card */}
//         <div className="absolute bottom-10 left-10 max-w-xs rounded-2xl bg-white/85 p-6 backdrop-blur">
//           <h3 className="text-3xl font-bold text-violet-600">
//             Experience Kerala
//             <br />
//             Curation
//           </h3>

//           <p className="mt-3 text-sm leading-6 text-slate-600">
//             Unlock access to premium homestays and hidden gems across God's Own
//             Country.
//           </p>
//         </div>
//       </div>

//       {/* RIGHT LOGIN SECTION */}
//       <div className="flex items-center justify-center px-8 pb-10 lg:px-12">
//         <div className="w-full max-w-md">
//           {/* Logo */}
//           <div className="mb-10 text-center">
//             <Image
//               src="/images/logo.jpeg"
//               alt="StayUndo Logo"
//               width={160}
//               height={50}
//               priority
//               className="object-contain mx-auto"
//             />
//           </div>

//           {/* Heading */}
//           <h2 className="text-4xl font-bold text-slate-900">Welcome back</h2>

//           <p className="mt-3 text-slate-500">
//             Please enter your details to sign in.
//           </p>

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="mt-10 space-y-6">
//             {/* Email */}
//             <div>
//               <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-500">
//                 Email or Phone Number
//               </label>

//               <div className="relative">
//                 <User
//                   size={18}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="text"
//                   placeholder="Enter your email or phone"
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-violet-500"
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <div className="mb-2 flex items-center justify-between">
//                 <label className="text-xs font-semibold tracking-wide text-slate-500">
//                   Password
//                 </label>

//                 <button
//                   type="button"
//                   className="text-xs font-medium text-violet-600"
//                 >
//                   Forgot Password?
//                 </button>
//               </div>

//               <div className="relative">
//                 <Lock
//                   size={18}
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                 />

//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-11 outline-none transition focus:border-violet-500"
//                 />

//                 <Eye
//                   size={18}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
//                 />
//               </div>
//             </div>

//             {/* Remember */}
//             <label className="flex items-center gap-2 text-sm text-slate-500">
//               <input
//                 type="checkbox"
//                 className="h-4 w-4 rounded border-slate-300"
//               />
//               Keep me signed in
//             </label>

//             {/* Login Button */}
//             <button
//               type="submit"
//               className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 py-4 font-semibold text-white shadow-lg transition hover:opacity-90"
//             >
//               Login
//               <ArrowRight size={18} />
//             </button>

//             {/* Divider */}
//             <div className="flex items-center gap-4">
//               <div className="h-px flex-1 bg-slate-200" />

//               <span className="text-xs text-slate-400">OR CONTINUE WITH</span>

//               <div className="h-px flex-1 bg-slate-200" />
//             </div>

//             {/* Social Login */}
//             <div className="grid grid-cols-2 gap-3">
//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium"
//               >
//                 <FcGoogle size={18} />
//                 Google
//               </button>

//               <button
//                 type="button"
//                 className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium"
//               >
//                 <FaApple size={18} />
//                 Apple
//               </button>
//             </div>

//             {/* Signup */}
//             <p className="text-center text-sm text-slate-500">
//               Don't have an account?{" "}
//               <Link href="/signup" className="font-semibold text-violet-600">
//                 Create account
//               </Link>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// Firebase Authentication + Redux Toolkit
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { User, Lock, Eye, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const token = await userCredential.user.getIdToken();
      console.log("Firebase ID Token:", token);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/profile/`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }

      const profile = await response.json();
      console.log("PROFILE:",profile)
      dispatch(
        loginSuccess({
          user: profile,
          token,
        }),
      );

      router.push("/");
    } catch (error) {
      console.error(error);

      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-white lg:grid lg:min-h-[90vh] lg:grid-cols-[60%_40%]">
      {/* LEFT IMAGE */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/login-banner.png"
          alt="Kerala Backwaters"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute bottom-10 left-10 max-w-xs rounded-2xl bg-white/85 p-6 backdrop-blur">
          <h3 className="text-3xl font-bold text-violet-600">
            Experience Kerala
            <br />
            Curation
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Unlock access to premium homestays and hidden gems across God&apos;s
            Own Country.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center px-8 pb-10 lg:px-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-10 text-center">
            <Image
              src="/images/logo.jpeg"
              alt="StayUndo Logo"
              width={160}
              height={50}
              priority
              className="mx-auto object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold text-slate-900">Welcome back</h2>

          <p className="mt-3 text-slate-500">
            Please enter your details to sign in.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-500">
                Email Address
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-violet-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-semibold tracking-wide text-slate-500">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-violet-600"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-11 outline-none transition focus:border-violet-500"
                />

                <Eye
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>

            {/* Remember */}
            <label className="flex items-center gap-2 text-sm text-slate-500">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300"
              />
              Keep me signed in
            </label>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 py-4 font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing In..." : "Login"}

              {!loading && <ArrowRight size={18} />}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="text-xs text-slate-400">OR CONTINUE WITH</span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>
            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium transition hover:bg-slate-50"
              >
                <FcGoogle size={18} />
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium transition hover:bg-slate-50"
              >
                <FaApple size={18} />
                Apple
              </button>
            </div>

            {/* Signup */}
            <p className="text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-violet-600 hover:underline"
              >
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
