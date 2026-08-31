import { project } from "../content";
import { GOOGLE_FORM_URL } from "../config";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo">
          {project.name}
        </a>
        <nav className="site-header__nav" aria-label="Primary">
          <a href="#highlights">Highlights</a>
          <a href="#floor-plans">Floor Plans</a>
          <a href="#why">Why Lucerne Grand</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary site-header__cta"
        >
          Register for Preview
        </a>
      </div>
    </header>
  );
}
