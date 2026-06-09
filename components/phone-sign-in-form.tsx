"use client";

import { useState } from "react";

// const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3036";

const API_BASE = "https://dev2.power-hub.app";

export default function PhoneSignInForm() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/auth/phone/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // sends/receives cookies
        body: JSON.stringify({ phone, password }),
      });

      const data = await res.json();

      if (data.status === "OK") {
        // window.location.href = "/dashboard"; // redirect after login
      } else {
        setError(data.message || "Invalid phone or password");
      }
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-4 mt-6">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="+855 XX XXX XXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="
            px-4 py-2
            border border-gray-300
            rounded-lg
            text-gray-900
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="
            px-4 py-2
            border border-gray-300
            rounded-lg
            text-gray-900
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="
          w-full py-2
          bg-blue-600 hover:bg-blue-700
          text-white font-medium
          rounded-lg
          transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
