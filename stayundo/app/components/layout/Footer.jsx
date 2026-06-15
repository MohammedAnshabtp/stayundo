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
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Support</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Explore</h4>
          <ul className="space-y-3">
            <li>Districts of Kerala</li>
            <li>Marketplace</li>
            <li>Services</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-5">Legal</h4>
          <ul className="space-y-3">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
