import { unitTypes } from "../content";
import "./FloorPlans.css";

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="floor-plans">
      <div className="container">
        <span className="section-label">Floor Plans</span>
        <h2>Unit Types</h2>
        <p className="floor-plans__intro">
          Full floor plan images will be added here once released by the developer.
        </p>

        <div className="floor-plans__grid">
          {unitTypes.map((unit) => (
            <div key={unit.type} className="floor-plans__card">
              <div className="floor-plans__thumb">
                <span>Floor plan placeholder</span>
              </div>
              <h3>{unit.type}</h3>
              <p className="floor-plans__size">{unit.sizeSqft}</p>
              <p className="floor-plans__price">{unit.priceFrom}</p>
            </div>
          ))}
        </div>
        <span className="placeholder-note">
          Replace thumbnails with real floor plan images/PDF crops per unit type
        </span>
      </div>
    </section>
  );
}
