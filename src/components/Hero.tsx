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
        <span className="section-label">New Launch · {project.district}</span>
        <h1 className="hero__headline">{project.name}</h1>
        <p className="hero__tagline">{project.tagline}</p>

        <div className="hero__meta">
          <span>Preview: {project.previewDate}</span>
          <span className="hero__meta-divider">·</span>
          <span>Official Launch: {project.launchDate}</span>
        </div>

        <div className="hero__actions">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Register for Preview
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
