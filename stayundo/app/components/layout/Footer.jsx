import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/images/bg-removed-logo.png"
              alt="StayUndo Logo"
              width={170}
              height={55}
              priority
              className="object-contain"
            />
          </Link>

          <p className="mt-5 text-sm leading-6 text-slate-400">
            Kerala&apos;s Premium Accommodation Gateway connecting students,
            professionals, property owners, and local communities.
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-emerald-400" />
              <span>Kerala, India</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-lg">Company</h4>

          <ul className="space-y-3">
            <li>
              <Link
                href="/about-us"
                className="hover:text-emerald-400 transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact-support"
                className="hover:text-emerald-400 transition-colors"
              >
                Contact Support
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-emerald-400 transition-colors"
              >
                Our Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-lg">Explore</h4>

          <ul className="space-y-3">
            <li>
              <Link
                href="/districts"
                className="hover:text-emerald-400 transition-colors"
              >
                Districts of Kerala
              </Link>
            </li>

            <li>
              <Link
                href="/marketplace"
                className="hover:text-emerald-400 transition-colors"
              >
                Marketplace
              </Link>
            </li>

            <li>
              <Link
                href="/services"
                className="hover:text-emerald-400 transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                href="/hostels"
                className="hover:text-emerald-400 transition-colors"
              >
                Hostels & PGs
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-lg">Legal</h4>

          <ul className="space-y-3">
            <li>
              <Link
                href="/terms"
                className="hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
            </li>

            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/cookies"
                className="hover:text-emerald-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </li>

            <li>
              <Link
                href="/guidelines"
                className="hover:text-emerald-400 transition-colors"
              >
                Community Guidelines
              </Link>
            </li>
          </ul>
        </div>

        {/* BuildTogether */}
        <div>
          <h4 className="text-white font-semibold mb-5 text-lg">
            BuildTogether
          </h4>

          <p className="text-sm text-slate-400 leading-6 mb-5">
            Designed and developed by BuildTogether, creating modern digital
            experiences that connect people, services, and communities.
          </p>

          <div className="space-y-3">
            <Link
              href="https://github.com/MohammedAnshabtp/stayundo"
              target="_blank"
              className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
            >
              {/* <Github size={16} /> */}
              GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © 2026 StayUndo. All Rights Reserved.
          </p>

          <p className="text-sm text-slate-500 text-center md:text-right">
            Designed & Developed by{" "}
            <span className="text-emerald-400 font-medium">
              BuildTogether Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
