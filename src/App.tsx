import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import FloorPlans from "./components/FloorPlans";
import RegisterCta from "./components/RegisterCta";
import Pricing from "./components/Pricing";
import WhyChoose from "./components/WhyChoose";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { project } from "./content";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Gallery />
        <FloorPlans />
        <RegisterCta
          heading={`${project.soldPercent} sold. See what is left.`}
          subheading="For HDB upgraders: get the remaining units, layouts and prices sent to you, then arrange a viewing."
        />
        <Pricing />
        <WhyChoose />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
