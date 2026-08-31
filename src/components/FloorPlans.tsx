import { unitTypes, salesOffice, project } from "../content";
import "./FloorPlans.css";

function ctaHref(unitType: string) {
  const message = `Hi, I'd like the latest floor plan layout for the ${unitType} at ${project.name}.`;
  return `https://api.whatsapp.com/send?phone=65${salesOffice.phone.replace(/\D/g, "").slice(-8)}&text=${encodeURIComponent(message)}`;
}

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="floor-plans">
      <div className="container">
        <span className="section-label">Floor Plans</span>
        <h2>Unit Types</h2>
        <p className="floor-plans__intro">
          Indicative layouts and sizes only — subject to final survey and change by the
          developer. Full floor plans are released closer to preview; contact us for the
          latest version for any unit type.
        </p>

        <div className="floor-plans__grid">
          {unitTypes.map((unit) => (
            <div key={unit.type} className="floor-plans__card">
              <div className="floor-plans__thumb">
                <div className="floor-plans__sketch" aria-hidden="true">
                  <span className="floor-plans__room floor-plans__room--a" />
                  <span className="floor-plans__room floor-plans__room--b" />
                  <span className="floor-plans__room floor-plans__room--c" />
                </div>
                <span className="floor-plans__watermark">Draft</span>
              </div>
              <h3>{unit.type}</h3>
              <p className="floor-plans__size">{unit.sizeSqft}</p>
              <p className="floor-plans__price">{unit.priceFrom}</p>
              <a
                href={ctaHref(unit.type)}
                target="_blank"
                rel="noopener noreferrer"
                className="floor-plans__cta"
              >
                Contact Agent for Latest Layout
              </a>
            </div>
          ))}
        </div>
        <span className="placeholder-note">
          Layouts shown are draft sketches, not the actual floor plans — sizes are
          indicative and subject to final survey and change by the developer.
        </span>
      </div>
    </section>
  );
}
