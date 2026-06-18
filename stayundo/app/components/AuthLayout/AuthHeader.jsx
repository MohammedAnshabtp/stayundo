import Link from "next/link";
import Image from "next/image";

export default function AuthHeader() {
  return (
    <header className="flex items-center justify-between px-8 py-5">
      {/* <Link href="/" className="flex items-center"> */}
        <Image
          src="/images/bg-removed-logo.png"
          alt="StayUndo Logo"
          width={160}
          height={50}
          priority
          className="object-contain"
        />
      {/* </Link> */}

      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-500">Already have an account?</span>

        <Link
          href="/login"
          className="rounded-lg border border-violet-200 px-4 py-2 text-violet-600 hover:bg-violet-50"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
