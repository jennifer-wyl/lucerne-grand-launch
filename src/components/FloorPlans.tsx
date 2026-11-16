import { unitTypes, salesOffice, project } from "../content";
import "./FloorPlans.css";

// Real developer floor plan drawings, keyed by filename (see unitTypes'
// floorPlanImage in content.ts). Vite inlines these as URLs at build time.
const floorPlanImages = import.meta.glob("../assets/floorplans/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function floorPlanImageUrl(filename?: string) {
  if (!filename) return undefined;
  const entry = Object.entries(floorPlanImages).find(([path]) => path.endsWith(`/${filename}`));
  return entry?.[1];
}

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
          developer. Contact us for the latest version of any unit type.
        </p>

        <div className="floor-plans__grid">
          {unitTypes.map((unit) => {
            const imageUrl = floorPlanImageUrl(unit.floorPlanImage);
            return (
              <div key={unit.type} className="floor-plans__card">
                <div className="floor-plans__thumb">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt=""
                      aria-hidden="true"
                      className="floor-plans__image"
                    />
                  ) : (
                    <div className="floor-plans__sketch" aria-hidden="true">
                      <span className="floor-plans__room floor-plans__room--a" />
                      <span className="floor-plans__room floor-plans__room--b" />
                      <span className="floor-plans__room floor-plans__room--c" />
                    </div>
                  )}
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
                  Get Latest Layout
                </a>
              </div>
            );
          })}
        </div>
        <span className="placeholder-note">
          Layouts shown are draft and for reference only — sizes and unit configurations
          are indicative and subject to final survey and change by the developer.
        </span>
      </div>
    </section>
  );
}
