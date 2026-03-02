import { notFound } from "next/navigation";
import Link from "next/link";
import { hostels } from "@/lib/data";

export default function HostelDetail({ params }) {
  const hostel = hostels.find((item) => item.slug === params.slug);
  if (!hostel) notFound();

  return (
    <main className="container page-section">
      <div className="detail-banner pop-hover" style={{ background: hostel.image }}>
        <p>{hostel.type}</p>
        <h1>{hostel.name}</h1>
        <span>{hostel.area}, {hostel.city}</span>
      </div>

      <section className="detail-grid">
        <article className="detail-card pop-hover">
          <h2>Why this hostel</h2>
          <ul>
            {hostel.amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="detail-card pop-hover">
          <h2>Pricing</h2>
          <p className="price-large">Rs {hostel.price.toLocaleString()}/month</p>
          <p>Rating: {hostel.rating} / 5</p>
          <p>Available beds: {hostel.beds}</p>
          <Link className="btn btn-primary pulse" href={`/checkout?hostel=${hostel.slug}`}>Proceed to Checkout</Link>
        </article>
      </section>
    </main>
  );
}
