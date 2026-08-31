import { faqs } from "../content";
import "./Faq.css";

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <span className="section-label">FAQ</span>
        <h2>Common Questions</h2>

        <div className="faq__list">
          {faqs.map((item) => (
            <details key={item.q} className="faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <span className="placeholder-note">
          Legal/financing answers are placeholders — have these reviewed before
          publishing (avoid stating specific TDSR/LTV/ABSD figures without verifying
          current MAS/IRAS rules)
        </span>
      </div>
    </section>
  );
}
