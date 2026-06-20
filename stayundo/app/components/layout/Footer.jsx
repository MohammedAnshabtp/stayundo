import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/images/bg-removed-logo.png"
              alt="StayUndo Logo"
              width={160}
              height={50}
              priority
              className="object-contain"
            />
          </Link>
          <p className="text-sm text-emerald-300">
            © 2026 StayUndo. Kerala&apos;s Premium Accommodation Gateway.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Company</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            {/* <li>
              <Link href="/careers">Careers</Link>
            </li> */}
            <li>
              <Link href="/contact-support">Contact Support</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Explore</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/districts">Districts of Kerala</Link>
            </li>
            <li>
              <Link href="/marketplace">Marketplace</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Legal</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
