import { project } from "../content";
import "./Highlights.css";

export default function Highlights() {
  return (
    <section id="highlights" className="highlights">
      <div className="container">
        <span className="section-label">Project Highlights</span>
        <h2>Location &amp; Connectivity</h2>

        <div className="highlights__grid">
          <div className="highlights__card">
            <h3>District</h3>
            <p>{project.district}</p>
          </div>
          <div className="highlights__card">
            <h3>Nearest MRT</h3>
            <p>{project.nearestMRT}</p>
          </div>
          <div className="highlights__card">
            <h3>Developer</h3>
            <p>{project.developer}</p>
          </div>
          <div className="highlights__card">
            <h3>Possession</h3>
            <p>{project.possessionTimeline}</p>
          </div>
          <div className="highlights__card">
            <h3>Tenure</h3>
            <p>{project.tenure}</p>
          </div>
        </div>

        <div className="highlights__travel">
          <h3>Travel Times</h3>
          <ul>
            {project.travelTimes.map((t) => (
              <li key={t.destination}>
                <span>{t.destination}</span>
                <span className="highlights__travel-time">{t.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="highlights__map-placeholder">
          <span>Location map placeholder</span>
          <span className="placeholder-note">
            Swap in embedded map or neighborhood image once available
          </span>
        </div>
      </div>
    </section>
  );
}
