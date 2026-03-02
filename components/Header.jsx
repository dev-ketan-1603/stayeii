import Link from "next/link";

export default function Header() {
  return (
    <header className="topbar container">
      <Link className="logo" href="/">
        <span className="logo-mark">s</span>
        <span className="logo-text">stayeii</span>
      </Link>
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/listings">Hostels</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="btn btn-light" href="/login">Login</Link>
    </header>
  );
}
