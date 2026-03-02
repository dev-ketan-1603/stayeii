"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { hostels, services } from "@/lib/data";
import HostelCard from "@/components/HostelCard";
import Toast from "@/components/Toast";

export default function HomePage() {
  const router = useRouter();
  const [city, setCity] = useState("Bengaluru");
  const [checkin, setCheckin] = useState(new Date().toISOString().split("T")[0]);
  const [duration, setDuration] = useState("3 Months");
  const [budget, setBudget] = useState("Rs 10,000 - Rs 15,000");
  const [toast, setToast] = useState("");

  const stats = useMemo(
    () => [
      { value: "2300+", label: "Beds Live" },
      { value: "120+", label: "Cities" },
      { value: "4.8/5", label: "Service Score" }
    ],
    []
  );

  function onSearch(event) {
    event.preventDefault();
    const query = new URLSearchParams({ city, checkin, duration, budget });
    router.push(`/listings?${query.toString()}`);
  }

  function onBook(hostel) {
    setToast(`Reserved ${hostel.name}. Redirecting to checkout...`);
    setTimeout(() => router.push(`/checkout?hostel=${hostel.slug}`), 650);
  }

  return (
    <main>
      <section className="hero container">
        <div className="hero-copy reveal-up">
          <p className="tag">HOSTEL SERVICES PLATFORM</p>
          <h1>
            Secure your next <span>stayeii</span> with full-service hostel living.
          </h1>
          <p className="subtitle">
            Stays, meals, laundry, and community access. One account, one checkout, instant move-in.
          </p>
          <div className="stats-row">
            {stats.map((item) => (
              <div className="glass pop-hover" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <form className="search-panel reveal-up pop-hover" onSubmit={onSearch}>
          <h2>Find Your Hostel</h2>
          <label>
            City / Area
            <input value={city} onChange={(e) => setCity(e.target.value)} required />
          </label>
          <label>
            Check-in
            <input min={new Date().toISOString().split("T")[0]} type="date" value={checkin} onChange={(e) => setCheckin(e.target.value)} required />
          </label>
          <label>
            Stay Duration
            <select value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option>1 Month</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
            </select>
          </label>
          <label>
            Budget / Month
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option>Rs 6,000 - Rs 10,000</option>
              <option>Rs 10,000 - Rs 15,000</option>
              <option>Rs 15,000 - Rs 20,000</option>
              <option>Rs 20,000+</option>
            </select>
          </label>
          <button className="btn btn-primary pulse" type="submit">Search Hostels</button>
        </form>
      </section>

      <section className="trusted container">
        <p>Trusted by top hostel operators</p>
        <div className="trust-grid">
          {["UrbanNest", "MetroRooms", "CampusHaven", "SkyDorm", "CoLive+"].map((name) => (
            <span className="pop-hover" key={name}>{name}</span>
          ))}
        </div>
      </section>

      <section className="listings container">
        <div className="section-head">
          <h2>Top Picked Hostels</h2>
          <Link className="btn btn-ghost pop-hover" href="/listings">View All</Link>
        </div>
        <div className="cards">
          {hostels.slice(0, 3).map((hostel) => (
            <HostelCard hostel={hostel} key={hostel.slug} onBook={onBook} />
          ))}
        </div>
      </section>

      <section className="services container">
        <div className="section-head">
          <h2>Beyond Bed Booking</h2>
          <Link className="btn btn-ghost pop-hover" href="/services">Explore Services</Link>
        </div>
        <div className="service-grid">
          {services.map((item) => (
            <article className="service-card pop-hover" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta container pop-hover">
        <div>
          <h2>Need help choosing the right hostel?</h2>
          <p>Talk to a stay advisor and get a shortlist with virtual tours in under 10 minutes.</p>
        </div>
        <button className="btn btn-primary pulse" onClick={() => router.push("/contact")} type="button">
          Talk to Advisor
        </button>
      </section>

      <footer className="container footer">
        <p>� 2026 stayeii. Hostel services, elevated.</p>
      </footer>

      <Toast message={toast} clearMessage={() => setToast("")} />
    </main>
  );
}
