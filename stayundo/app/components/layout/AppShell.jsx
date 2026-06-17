"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function AppShell({ children }) {
  const pathname = usePathname();

  const hideLayout =
    pathname === "/signup" || pathname === "/login";

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}