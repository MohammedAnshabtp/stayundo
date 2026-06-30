import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppShell from "./components/layout/AppShell"
// import { AuthProvider } from "@/contexts/AuthContext";
import AuthProvider from "./components/AuthProvider";
import ReduxProvider from "./store/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stayundo",
  description: "Find Your Stay And Essentials",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
        <AuthProvider>         
          <AppShell> {children} </AppShell>         
        </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
