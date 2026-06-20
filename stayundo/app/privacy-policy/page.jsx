export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f8f7fc] min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold">Privacy Policy</h1>

        <div className="bg-white rounded-3xl border p-10 mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Information We Collect</h2>

            <p className="text-gray-600 mt-3">
              We collect account information, listing data, and communication
              details required to provide StayUndo services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Data Protection</h2>

            <p className="text-gray-600 mt-3">
              Your data is securely stored and never sold to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">User Rights</h2>

            <p className="text-gray-600 mt-3">
              You may request updates or deletion of your information at any
              time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
