import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Navbar from './components/NavBar';
import Home from './pages/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup onAuth={() => setIsAuthenticated(true)} />} />
        <Route path="/login" element={<Login onAuth={() => setIsAuthenticated(true)} />} />
        <Route
          path="/notes"
          element={isAuthenticated ? <Notes /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;