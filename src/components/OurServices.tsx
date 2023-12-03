const services = [
  {
    title: "1. International Freight Services:",
    body: "GlovoShipping specializes in international freight services, connecting businesses and individuals across borders. Whether you're shipping goods by air, sea, or land, our dedicated team ensures that your cargo reaches its destination with speed and security. We handle everything from documentation to customs clearance, providing end-to-end solutions for your international shipping needs.",
  },
  {
    title: "2. Express Delivery Solutions:",
    body: "Time-sensitive shipments demand a reliable partner, and GlovoShipping is here to deliver. Our express delivery services are designed to meet tight deadlines, providing swift and efficient transportation for urgent shipments. With real-time tracking and a commitment to on-time deliveries, GlovoShipping ensures that your time-sensitive cargo is in safe hands.",
  },
  {
    title: "3. Customs Clearance Expertise:",
    body: "Navigating the complexities of customs clearance is a crucial aspect of international shipping. At GlovoShipping, our experienced team takes the hassle out of customs procedures. We handle all documentation, compliance, and coordination, ensuring that your shipments clear customs smoothly, minimizing delays, and avoiding unnecessary complications.",
  },
  {
    title: "4. Packaging Solutions:",
    body: "The safety of your goods is our priority. GlovoShipping offers professional packaging solutions to protect your shipments during transit. From specialized packaging materials to customized packaging designs, we ensure that your items are secure and arrive in pristine condition at their destination.",
  },
  {
    title: "5. Technology-Driven Logistics:",
    body: "Stay connected and informed throughout the shipping process with GlovoShipping's technology-driven logistics solutions. Our advanced tracking systems provide real-time visibility into your shipments, allowing you to monitor their progress from pickup to delivery. Embrace efficiency and transparency with our cutting-edge technological solutions.",
  },
  {
    title: "6. Personalized Customer Service:",
    body: "At GlovoShipping, we understand that every shipment is unique. Our customer-centric approach means that we tailor our services to meet your specific requirements. Our dedicated customer service team is always ready to assist you, providing personalized support to ensure a smooth shipping experience.",
  },
];

const OurServices = () => {
  return (
    <div>
      {/* container */}
      <div className="w-[90%] md:w-[80%] mx-auto p-3">
        {/* header */}
        <div className="space-y-4">
          <h3 className="font-head md:text-3xl text-xl font-bold text-blue-700">
            Our Services
          </h3>
          <p className="font-body leading-loose font-light w-full md:w-[50%] text-neutral-700">
            At GlovoShipping, we take pride in offering a comprehensive suite of
            shipping services designed to meet the diverse needs of our valued
            customers. With a commitment to excellence and a global network of
            partners, we provide reliable, efficient, and innovative solutions
            to simplify your shipping experience.
          </p>
        </div>
        {/* other services */}
        <div className="space-y-6 my-6">
          {services.map((service) => (
            <div>
              <h4 className="font-head text-xl font-bold text-blue-700">
                {service.title}
              </h4>
              <p className="font-body leading-loose font-light w-full md:w-[50%] text-neutral-700">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
