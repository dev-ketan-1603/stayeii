import Link from "next/link";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <main className="container page-section">
      <div className="section-head">
        <h1>Services</h1>
        <Link className="btn btn-ghost pop-hover" href="/listings">Book a Hostel</Link>
      </div>

      <div className="service-grid">
        {services.map((item) => (
          <article className="service-card pop-hover" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link className="btn btn-primary" href="/contact">Activate</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
