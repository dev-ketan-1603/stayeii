"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import HostelCard from "@/components/HostelCard";
import Toast from "@/components/Toast";

export default function ListingClient({ hostels, searchParams }) {
  const [toast, setToast] = useState("");
  const router = useRouter();
  const city = searchParams?.city?.toLowerCase() || "";

  const filtered = useMemo(() => {
    if (!city) return hostels;
    return hostels.filter((item) =>
      `${item.city} ${item.area}`.toLowerCase().includes(city)
    );
  }, [city, hostels]);

  function onBook(hostel) {
    setToast(`Booking ${hostel.name}. Redirecting to checkout...`);
    setTimeout(() => router.push(`/checkout?hostel=${hostel.slug}`), 600);
  }

  return (
    <main className="container page-section">
      <div className="section-head">
        <h1>Hostel Listings</h1>
        <p className="muted">{filtered.length} properties available</p>
      </div>

      <div className="cards">
        {filtered.map((hostel) => (
          <HostelCard hostel={hostel} key={hostel.slug} onBook={onBook} />
        ))}
      </div>

      {!filtered.length && (
        <div className="empty pop-hover">
          <h3>No hostels found</h3>
          <p>Try another city or open all listings from the home page.</p>
        </div>
      )}

      <Toast message={toast} clearMessage={() => setToast("")} />
    </main>
  );
}
