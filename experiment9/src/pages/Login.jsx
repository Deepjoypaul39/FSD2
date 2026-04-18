import { useState } from "react";
import { login, getRole } from "../utils/auth";
import "./DarkLogin.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      alert("Enter username & password");
      return;
    }

    login(username, password);

    const role = getRole();

    if (role === "ADMIN") {
      window.location.href = "/admin";
    } else {
      window.location.href = "/user";
    }
  };

  return (
    <div className="dark-container">
      <div className="dark-card">

        <h2>🚀 Secure Login</h2>
        <p className="tagline">Access your dashboard</p>

        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Sign In</button>

        <p className="footer">RBAC System • Experiment 9</p>

      </div>
    </div>
  );
}

export default Login;