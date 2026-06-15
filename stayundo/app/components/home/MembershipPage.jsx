export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-20 text-center lg:px-12">
        <div className="relative z-10">
          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight text-slate-900">
            Stop Wasting Time on Endless Calls and Unverified Listings
          </h1>

          <p className="mx-auto max-w-3xl text-2xl text-slate-600">
            Quality Living Isn&apos;t Hard to Find. Finding Trusted Information
            Is.
          </p>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Reality */}
          <div className="rounded-3xl border border-red-100 bg-red-50 p-10">
            <div className="mb-8 flex items-center gap-3 text-red-600">
              <h3 className="text-3xl font-bold">Reality</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <span>✕</span>
                <p className="text-slate-600">
                  Hundreds of unverified listings that look nothing like the
                  photos.
                </p>
              </li>

              <li className="flex gap-4">
                <span>✕</span>
                <p className="text-slate-600">
                  Hidden brokerage and service charges revealed only at the last
                  minute.
                </p>
              </li>

              <li className="flex gap-4">
                <span>✕</span>
                <p className="text-slate-600">
                  Zero quality standards; no way to compare facilities
                  objectively.
                </p>
              </li>

              <li className="flex gap-4">
                <span>✕</span>
                <p className="text-slate-600">
                  Wasted weekends traveling to properties that don&apos;t exist.
                </p>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="rounded-3xl border border-emerald-200 bg-white p-10 shadow-xl">
            <div className="mb-8 flex items-center gap-3 text-emerald-600">
              <h3 className="text-3xl font-bold">StayUndo Solution</h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-2 font-semibold text-emerald-600">
                  ✓ Verified Listings
                </h4>
                <p className="text-sm text-slate-600">
                  Organized and quality-graded.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-emerald-600">
                  ✓ Stay Quality Grade
                </h4>
                <p className="text-sm text-slate-600">
                  Standardized rating system.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-emerald-600">
                  ✓ Food & Facilities
                </h4>
                <p className="text-sm text-slate-600">
                  Detailed amenity verification.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-emerald-600">
                  ✓ Security Check
                </h4>
                <p className="text-sm text-slate-600">
                  Validated safety measures.
                </p>
              </div>

              <div className="sm:col-span-2">
                <h4 className="mb-2 font-semibold text-emerald-600">
                  ✓ Nearby Essentials
                </h4>
                <p className="text-sm text-slate-600">
                  Distance to transit, stores, and healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Offer */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="rounded-[32px] bg-gradient-to-r from-indigo-600 to-purple-500 p-[2px]">
          <div className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-white p-8 lg:flex-row lg:p-12">
            <div>
              <span className="mb-6 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Limited Time Welcome Offer
              </span>

              <h2 className="mb-4 text-4xl font-bold text-indigo-600">
                First 5 Contacts Free
              </h2>

              <div className="flex flex-wrap gap-4 text-slate-600">
                <span>✓ Unlimited browsing</span>
                <span>✓ Detailed property views</span>
                <span>✓ Save favorites</span>
              </div>
            </div>

            <div className="w-full rounded-2xl border bg-slate-50 p-6 text-center lg:w-80">
              <p className="mb-2 text-sm text-slate-500">
                Kickstart your search
              </p>

              <div className="mb-4 text-5xl font-bold">
                5 <span className="text-lg font-medium">Credits</span>
              </div>

              <button className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 py-3 font-semibold text-white">
                Claim Free Contacts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Plans */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Buyer Premium Plans</h2>

            <p className="text-slate-600">
              Get faster results with direct owner contacts and premium listing
              access.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {/* Basic */}
            <div className="rounded-[32px] border bg-white p-10">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
                Starter
              </div>

              <h3 className="mb-4 text-3xl font-bold">Basic Premium</h3>

              <div className="mb-8">
                <span className="text-5xl font-bold">₹199</span>
                <span className="text-slate-500"> / 30 Days</span>
              </div>

              <ul className="mb-10 space-y-4 text-slate-600">
                <li>✓ Unlimited contact details</li>
                <li>✓ 500+ premium property views</li>
                <li>✓ Special offers on stays</li>
                <li>✓ Standard chat support</li>
              </ul>

              <button className="w-full rounded-2xl border-2 border-indigo-600 py-4 font-semibold text-indigo-600">
                Get 30 Days Access
              </button>
            </div>

            {/* Premium */}
            <div className="relative rounded-[32px] border-2 border-indigo-600 bg-indigo-50 p-10">
              <div className="absolute right-6 top-6 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                POPULAR
              </div>

              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Most Chosen
              </div>

              <h3 className="mb-4 text-3xl font-bold">Premium Plus</h3>

              <div className="mb-8">
                <span className="text-5xl font-bold">₹399</span>
                <span className="text-slate-500"> / 60 Days</span>
              </div>

              <ul className="mb-10 space-y-4 text-slate-600">
                <li>✓ Everything in Basic</li>
                <li>✓ Double validity (60 Days)</li>
                <li>✓ Early access to new listings</li>
                <li>✓ Priority human assistance</li>
              </ul>

              <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 py-4 font-semibold text-white">
                Get 60 Days Access
              </button>
            </div>
          </div>

          <p className="mt-12 text-center italic text-slate-500">
            Most users find their perfect stay within 60 days.
          </p>
        </div>
      </section>

      {/* Seller Plans */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-bold">
              Grow Your Property Reach
            </h2>

            <p className="mb-8 text-slate-600">
              Reach students, professionals, travelers, and families actively
              searching for accommodation across Kerala.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-slate-100 p-6">
                <div className="text-4xl font-bold text-indigo-600">50k+</div>
                <p className="text-sm uppercase tracking-wide text-slate-500">
                  Monthly Users
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-6">
                <div className="text-4xl font-bold text-emerald-600">98%</div>
                <p className="text-sm uppercase tracking-wide text-slate-500">
                  Quality Match
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-3xl border bg-white p-8">
              <div>
                <h4 className="text-2xl font-bold">Start Free</h4>
                <p className="text-slate-500">30-Day Listing Trial</p>
              </div>

              <button className="rounded-xl bg-slate-100 px-6 py-3 font-semibold">
                Try Free
              </button>
            </div>

            <div className="flex items-center justify-between overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 to-emerald-400 p-8 text-white">
              <div>
                <h4 className="text-2xl font-bold">Seller Annual Plan</h4>

                <p>
                  ₹2,388 / Year{" "}
                  <span className="rounded bg-white/20 px-2 py-1 text-xs">
                    SAVE 40%
                  </span>
                </p>
              </div>

              <button className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-5xl font-bold">
            Your first five connections are on us.
          </h2>

          <p className="mb-12 text-xl text-slate-300">
            The right stay is worth finding. Start free. Upgrade only when
            you&apos;re ready.
          </p>

          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <button className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-500 px-10 py-5 font-semibold">
              Explore Stays Free
            </button>

            <button className="rounded-2xl border border-white/20 bg-white/10 px-10 py-5 font-semibold backdrop-blur">
              Become a Seller
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
