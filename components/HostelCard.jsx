import Link from "next/link";

export default function HostelCard({ hostel, onBook }) {
  return (
    <article className="card pop-hover">
      <div className="card-image" style={{ background: hostel.image }} />
      <div className="chip">{hostel.type}</div>
      <h3>{hostel.name}</h3>
      <p className="location">{hostel.area}, {hostel.city}</p>
      <ul>
        {hostel.amenities.slice(0, 3).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="price-row">
        <strong>Rs {hostel.price.toLocaleString()}/mo</strong>
        <div className="card-actions">
          <Link className="btn btn-card" href={`/hostels/${hostel.slug}`}>Details</Link>
          <button className="btn btn-primary" onClick={() => onBook(hostel)} type="button">
            Book
          </button>
        </div>
      </div>
    </article>
  );
}
