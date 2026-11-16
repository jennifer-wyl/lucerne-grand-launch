import type { CSSProperties } from "react";
import { project, heroStats } from "../content";
import { GOOGLE_FORM_URL } from "../config";
import heroImage from "../assets/renders/overall-exterior.jpg";
import "./Hero.css";

export default function Hero() {
  const heroStyle = { "--hero-image": `url(${heroImage})` } as CSSProperties;

  return (
    <section id="top" className="hero" style={heroStyle}>
      <div className="container hero__inner">
        <span className="section-label">Now selling · {project.district}</span>
        <h1 className="hero__headline">{project.name}</h1>
        <p className="hero__tagline">{project.tagline}</p>

        <p className="hero__meta">
          {project.soldPercent} sold as at {project.soldAsAt}
        </p>

        <div className="hero__actions">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Check Availability
          </a>
          <a href="#highlights" className="btn btn-secondary">
            Explore the Project
          </a>
        </div>

        <div className="hero__stats">
          {heroStats.map((stat) => (
            <div key={stat.label} className="hero__stat">
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
