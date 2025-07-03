import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#14101e] text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-4 py-16">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">Welcome to Secure Notes</h1>
        <p className="text-gray-400 max-w-xl mb-6 text-lg">
          A private, secure, and elegant way to store your thoughts. Clean. Fast. No distractions.
        </p>
        <div className="space-x-4">
          <Link to="/signup" className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-lg text-white font-medium transition">
            Get Started
          </Link>
          <Link to="/login" className="text-purple-400 hover:underline text-base">
            Already have an account?
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1c1828] py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold text-purple-300 mb-10">Why Choose Secure Notes?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-[#2a223a] p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-200 mb-2">🔐 Privacy First</h3>
            <p className="text-gray-400">Your notes stay with you — no cloud, no spying, no nonsense.</p>
          </div>
          <div className="bg-[#2a223a] p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-200 mb-2">⚡ Minimal & Fast</h3>
            <p className="text-gray-400">Just you and your thoughts. No clutter, no distractions.</p>
          </div>
          <div className="bg-[#2a223a] p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-200 mb-2">🛡️ Secure by Design</h3>
            <p className="text-gray-400">Token-based auth and local encryption ensure total control.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#100c18] text-center text-gray-500 py-6 text-sm">
        © {new Date().getFullYear()} Secure Notes. Built for privacy lovers.
      </footer>
    </div>
  );
}
