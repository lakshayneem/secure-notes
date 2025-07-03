import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login({ onAuth }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);

      if (onAuth) onAuth(); // ✅ Notify parent component
      navigate('/notes');   // ✅ Go to Notes after login
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#14101e] px-4 text-white">
      <div className="w-full max-w-sm bg-[#1c1828] p-8 rounded-xl shadow-lg border border-purple-900">
        <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-[#14101e] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-[#14101e] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-md font-semibold transition"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-400">
          Don't have an account? <a href="/signup" className="text-purple-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
