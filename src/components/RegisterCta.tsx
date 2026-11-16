import { GOOGLE_FORM_URL } from "../config";
import "./RegisterCta.css";

type Props = {
  heading?: string;
  subheading?: string;
};

export default function RegisterCta({
  heading = "Check what is still available",
  subheading = "Leave your details and we will send the units still open and arrange a viewing.",
}: Props) {
  return (
    <section className="register-cta">
      <div className="container register-cta__inner">
        <div>
          <h2 className="register-cta__heading">{heading}</h2>
          <p className="register-cta__subheading">{subheading}</p>
        </div>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Check Availability
        </a>
      </div>
    </section>
  );
}
