"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function onLogin(event) {
    event.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    router.push("/");
  }

  return (
    <main className="container page-section">
      <h1>Login</h1>
      <form className="detail-card narrow pop-hover" onSubmit={onLogin}>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </label>
        <button className="btn btn-primary pulse" type="submit">Login</button>
        {error && <p className="info-banner">{error}</p>}
      </form>
    </main>
  );
}
