import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="bg-[#1c1828] text-gray-300 px-6 py-4 flex justify-between items-center shadow-sm">
      <Link to="/" className="text-xl font-semibold text-purple-400 hover:text-purple-300">
        Secure Notes
      </Link>
      <div className="space-x-4">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-purple-600 hover:bg-purple-500 px-4 py-1 rounded text-white"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="hover:text-purple-300">Login</Link>
            <Link to="/signup" className="bg-purple-600 hover:bg-purple-500 px-4 py-1 rounded text-white">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
