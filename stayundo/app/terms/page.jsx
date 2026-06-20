export default function TermsPage() {
  return (
    <main className="bg-[#f8f7fc] min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold">Terms of Service</h1>

        <div className="bg-white rounded-3xl border p-10 mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Marketplace Usage</h2>

            <p className="text-gray-600 mt-3">
              Users must provide accurate information when posting
              accommodations, products, or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Prohibited Activities</h2>

            <p className="text-gray-600 mt-3">
              Fraudulent listings, spam, and illegal activities are strictly
              prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Account Responsibility</h2>

            <p className="text-gray-600 mt-3">
              Users are responsible for maintaining account security and
              activity.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
