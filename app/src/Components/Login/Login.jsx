import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: username,
          password: password
        })
      });

      if (!res.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      // Store JWT token
      localStorage.setItem("token", data.token);

      setShowToast(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-container">
          <h1 className="login-title">Admin Use Only</h1>
          <p className="login-subtitle">Authorized access required</p>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          {error && <p className="login-error">{error}</p>}

          {showToast && (
            <div className="login-toast">
              Login successful. Redirecting...
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
