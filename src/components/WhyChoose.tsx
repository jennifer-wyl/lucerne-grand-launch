import { whyChoose, project } from "../content";
import "./WhyChoose.css";

export default function WhyChoose() {
  return (
    <section id="why" className="why-choose">
      <div className="container">
        <span className="section-label">Why {project.name}</span>
        <h2>How It Compares</h2>

        <div className="why-choose__grid">
          {whyChoose.map((point, i) => (
            <div key={point.title} className="why-choose__card">
              <span className="why-choose__index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>

        <div className="why-choose__developer">
          <h3>About {project.developer}</h3>
          <p>{project.developerCredibility}</p>
        </div>
      </div>
    </section>
  );
}
