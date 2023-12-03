import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MakeDeliveryWork from "../components/MakeDeliveryWork";
import Navbar from "../components/Navbar";
import useJivoChatWidget from "../hooks/useChatSupport";

const HomePage = () => {
  useJivoChatWidget();
  return (
    <>
      <Navbar />
      <Hero
        title="Ready to Ship with Confidence?"
        subTitle="Explore the world of seamless shipping solutions with GlovoShipping. Whether you're a business looking for reliable international freight services or an individual with time-sensitive shipments, we've got you covered."
      />
      <MakeDeliveryWork />
      <Footer />
    </>
  );
};

export default HomePage;
