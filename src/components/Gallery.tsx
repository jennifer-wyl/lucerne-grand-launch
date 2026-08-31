import retailStreet from "../assets/renders/hero-retail-street.jpg";
import lobbyConcierge from "../assets/renders/lobby-concierge.jpg";
import nightPool from "../assets/renders/night-pool.jpg";
import "./Gallery.css";

const images = [
  {
    src: nightPool,
    caption: "Lap pool", // confirmed via developer rendering
  },
  {
    src: lobbyConcierge,
    caption: "Arrival lobby & concierge, with Lakeside MRT and the lake beyond", // confirmed via developer rendering
  },
  {
    src: retailStreet,
    caption: "Ground-floor retail & F&B", // confirmed via developer rendering
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <span className="section-label">Gallery</span>
        <h2>Developer's Artistic Impressions</h2>
        <p className="gallery__intro">
          Official renderings from the developer. Actual finishes, landscaping and
          furnishing may differ — see disclaimer in the footer.
        </p>

        <div className="gallery__grid">
          {images.map((img) => (
            <figure key={img.src} className="gallery__item">
              <img src={img.src} alt={img.caption} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
