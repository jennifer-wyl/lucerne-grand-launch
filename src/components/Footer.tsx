import { salesOffice, project, ceaDisclosure } from "../content";
import { GOOGLE_FORM_URL } from "../config";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h3>{project.name}</h3>
          <p className="site-footer__muted">Sales Office</p>
          <p>{salesOffice.address}</p>
          <p className="site-footer__muted">{salesOffice.hours}</p>
        </div>

        <div>
          <h3>Contact</h3>
          <p>{salesOffice.agentName} · {salesOffice.agentBrand}</p>
          <p>{salesOffice.phone}</p>
          <p>
            <a href={`mailto:${salesOffice.agentEmail}`}>{salesOffice.agentEmail}</a>
          </p>
        </div>

        <div>
          <h3>Registration</h3>
          <p className="site-footer__muted">
            Get VIP preview access and project updates.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Register Now
          </a>
        </div>
      </div>

      <div className="container site-footer__legal">
        <p className="site-footer__cea">{ceaDisclosure}</p>
        <p>
          © {new Date().getFullYear()} {project.name}. Information provided for
          reference only and subject to change. Renderings, floor plans and images
          are artist's impressions and not factual depictions. E.&amp;O.E.
        </p>
      </div>
    </footer>
  );
}
