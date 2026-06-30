// "use client";

// import { useAuth } from "@/contexts/AuthContext";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// export default function Header() {
//   const pathname = usePathname();
//   const { user, logout } = useAuth();

//   const navItems = [
//     {
//       name: "Home",
//       href: "/",
//     },
//     {
//       name: "Explore",
//       href: "/explore",
//     },
//     {
//       name: "Marketplace",
//       href: "/marketplace",
//     },
//     {
//       name: "Services",
//       href: "/services",
//     },
//   ];

//   return (
//     <header className="sticky top-0 bg-white shadow-sm z-50">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/images/logo.jpeg"
//             alt="StayUndo Logo"
//             width={160}
//             height={50}
//             priority
//             className="object-contain"
//           />
//         </Link>

//         <nav className="flex gap-6">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`font-medium transition ${
//                 pathname === item.href
//                   ? "text-indigo-600 border-b-2 border-indigo-600"
//                   : "text-gray-600"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//         {user ? (
//           <button
//             onClick={logout}
//             className="bg-red-500 text-white px-4 py-2 rounded-xl"
//           >
//             Logout
//           </button>
//         ) : (
//           <Link
//             href="/login"
//             className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
//           >
//             Login
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }

// Firebase Authentication + Redux Toolkit
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const user = useSelector((state) => state.auth.user);

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Explore",
      href: "/explore",
    },
    {
      name: "Marketplace",
      href: "/marketplace",
    },
    {
      name: "Services",
      href: "/services",
    },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);

      // Redirect to login page after logout
      router.push("/login");
    } catch (error) {
      console.error("Logout Error:", error);
      alert(error.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="StayUndo Logo"
            width={160}
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition ${
                pathname === item.href
                  ? "border-b-2 border-indigo-600 text-indigo-600"
                  : "text-gray-600 hover:text-indigo-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Auth Button */}
        {/* {user ? (
          <button
            onClick={handleLogout}
            className="rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="rounded-xl bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
          >
            Login
          </Link>
        )} */}
      </div>
    </header>
  );
}