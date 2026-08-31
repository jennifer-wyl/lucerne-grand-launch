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
          heading="Join the VIP preview list"
          subheading="Early access for HDB upgraders — be first to view floor plans and pricing ahead of the public launch."
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
