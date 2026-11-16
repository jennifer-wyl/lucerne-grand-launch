import { unitTypes, paymentTerms, amenities } from "../content";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <span className="section-label">Pricing &amp; Terms</span>
        <h2>Indicative Pricing</h2>
        <p className="pricing__disclaimer">
          Prices shown are indicative and subject to change. Confirm final pricing with
          our sales team before making any decisions.
        </p>

        <p className="pricing__from">
          {unitTypes[0]?.priceFrom.replace(/^From /, "Prices from ")}. Ask for the current
          price list and the units still available. Sizes and layouts are in the{" "}
          <a href="#floor-plans">Floor Plans</a> section.
        </p>

        <div className="pricing__columns">
          <div>
            <h3>Payment Terms</h3>
            <ul className="pricing__list">
              {paymentTerms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Amenities</h3>
            <ul className="pricing__list pricing__list--amenities">
              {amenities.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
