"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setStatus("Your request is submitted. A stay advisor will call you in 10 minutes.");
  }

  return (
    <main className="container page-section">
      <h1>Talk to an Advisor</h1>
      <form className="detail-card narrow pop-hover" onSubmit={handleSubmit}>
        <label>
          Name
          <input required placeholder="Your full name" />
        </label>
        <label>
          Phone
          <input required placeholder="Mobile number" />
        </label>
        <label>
          City Preference
          <input required placeholder="e.g. Bengaluru" />
        </label>
        <button className="btn btn-primary pulse" type="submit">Request Callback</button>
        {status && <p className="info-banner">{status}</p>}
      </form>
    </main>
  );
}
