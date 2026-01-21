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

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP: frontend-only validation (replace with backend later)
    if (username && password) {
      setShowToast(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
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
            placeholder="Username"
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
