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

        <div className="pricing__table-wrap">
          <table className="pricing__table">
            <thead>
              <tr>
                <th>Unit Type</th>
                <th>Price From</th>
              </tr>
            </thead>
            <tbody>
              {unitTypes.map((unit) => (
                <tr key={unit.type}>
                  <td>{unit.type}</td>
                  <td>{unit.priceFrom}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="pricing__table-note">
            See the <a href="#floor-plans">Floor Plans</a> section for indicative unit
            sizes and layouts.
          </p>
        </div>

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
