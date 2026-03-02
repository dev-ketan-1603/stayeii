"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { hostels } from "@/lib/data";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("hostel");
  const hostel = useMemo(() => hostels.find((item) => item.slug === slug) || hostels[0], [slug]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function submitCheckout(event) {
    event.preventDefault();
    if (!name || !phone) {
      setMessage("Please fill your name and phone number.");
      return;
    }
    setMessage(`Booking confirmed for ${hostel.name}. Our team will call you shortly.`);
    setName("");
    setPhone("");
  }

  return (
    <main className="container page-section">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <aside className="detail-card pop-hover">
          <h2>{hostel.name}</h2>
          <p>{hostel.area}, {hostel.city}</p>
          <p className="price-large">Rs {hostel.price.toLocaleString()}/month</p>
          <p>{hostel.type}</p>
        </aside>

        <form className="detail-card pop-hover" onSubmit={submitCheckout}>
          <h2>Resident Details</h2>
          <label>
            Full Name
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
          </label>
          <label>
            Phone Number
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit number" />
          </label>
          <button className="btn btn-primary pulse" type="submit">Confirm Booking</button>
          {message && <p className="info-banner">{message}</p>}
        </form>
      </div>
    </main>
  );
}
