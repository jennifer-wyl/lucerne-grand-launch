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
      </div>
    </section>
  );
}
