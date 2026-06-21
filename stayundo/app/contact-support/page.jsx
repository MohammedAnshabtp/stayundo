export default function ContactSupportPage() {
  return (
    <main className="bg-[#f8f7fc] min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold">Contact Support</h1>

        <p className="text-gray-600 mt-4">
          Need help? Our support team is ready to assist.
        </p>

        <form className="bg-white rounded-3xl border p-8 mt-10 space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            rows="6"
            placeholder="How can we help?"
            className="w-full border rounded-xl p-4"
          />

          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
