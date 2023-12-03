import AboutBody from "../components/AboutBody";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="About Us" />
      <AboutBody />
      <Footer />
    </>
  );
};

export default AboutPage;
