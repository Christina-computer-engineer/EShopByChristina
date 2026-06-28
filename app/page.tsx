import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to E-Shop
          </h1>

          <p className="text-xl mb-8">
            Discover the best products at the best prices.
            Shop smarter with our modern online store.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/products"
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Shop Now
            </Link>

            <Link
              href="/admin"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Get your products delivered quickly and safely.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Safe online payment with Stripe Test Mode.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">
              Quality Products
            </h3>
            <p className="text-gray-600">
              Premium products at affordable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Shop by Category
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-100 rounded-xl p-8 text-center text-xl font-semibold">
              💻 Electronics
            </div>

            <div className="bg-green-100 rounded-xl p-8 text-center text-xl font-semibold">
              🎧 Accessories
            </div>

            <div className="bg-yellow-100 rounded-xl p-8 text-center text-xl font-semibold">
              ⌨️ Computer Parts
            </div>

            <div className="bg-pink-100 rounded-xl p-8 text-center text-xl font-semibold">
              📱 Mobile Devices
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 E-Shop. All Rights Reserved.</p>
      </footer>
    </main>
  );
}