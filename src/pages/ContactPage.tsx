import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactUsBody";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Hero title="Reach out to us" />
      {/* body */}
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;
