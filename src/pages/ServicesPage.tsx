import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";

const ServicesPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* hero */}
      <Hero title="Services" />
      {/* our services */}
      <OurServices />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesPage;
