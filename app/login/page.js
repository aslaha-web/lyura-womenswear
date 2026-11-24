
"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "../context/authcontext";
import "./login.css";

export default function Login() {
  const {login} = useContext(AuthContext)
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://dummyjson.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: email,
            password: password,
            expiresInMins: 30,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      login({
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        accessToken: data.accessToken,
      });

      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    router.push("/");
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <p className="login-eyebrow">WELCOME TO LYURA</p>

        <h1>
          Sign <span>In</span>
        </h1>

        <p className="login-description">
          Sign in to explore our collection.
        </p>

        <form onSubmit={handleLogin}>
          <div className="login-field">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "PLEASE WAIT..." : "LOGIN"}
          </button>
        </form>

        <button className="skip-button" onClick={handleSkip}>
          SKIP FOR NOW
        </button>

        <Link href="/products" className="login-back">
          Continue Shopping
        </Link>
      </div>
    </main>
  );
}
