"use client";

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

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
      name: "Host",
      href: "/host",
    },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
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

        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition ${
                pathname === item.href
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {user ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
