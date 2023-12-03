const AboutBody = () => {
  return (
    <div>
      {/* container */}
      <div className="w-[90%] md:w-[80%] p-4 mx-auto space-y-6">
        {/* header */}
        <div className="space-y-4">
          <h3 className="font-head md:text-3xl text-xl font-bold text-blue-700">
            About GlovoShipping
          </h3>
          <p className="font-body leading-loose font-light w-full md:w-[50%] text-neutral-700">
            Welcome to GlovoShipping, your trusted partner in global logistics
            and seamless shipping solutions. At GlovoShipping, we understand
            that in today's interconnected world, efficient and reliable
            shipping is essential for businesses and individuals alike. With a
            commitment to excellence and a focus on customer satisfaction,
            GlovoShipping is here to simplify your shipping experience.
          </p>
        </div>
        {/* our Mission */}
        <div className="space-y-4">
          <h3 className="font-head md:text-3xl text-xl font-bold text-blue-700">
            Our Mission
          </h3>
          <p className="font-body leading-loose font-light w-full md:w-[50%] text-neutral-700">
            Our mission at GlovoShipping is to provide unparalleled shipping
            services that bridge continents, connect communities, and facilitate
            the flow of goods worldwide. We strive to be the leading force in
            global logistics, offering innovative solutions tailored to meet the
            unique needs of our diverse clientele.
          </p>
        </div>
        {/* Join the Journey  */}
        <div className="space-y-4">
          <h3 className="font-head md:text-3xl text-xl font-bold text-blue-700">
            Join Us on the Journey
          </h3>
          <p className="font-body leading-loose font-light w-full md:w-[50%] text-neutral-700">
            GlovoShipping invites you to join us on the journey of efficient,
            reliable, and hassle-free shipping. Discover a world of
            possibilities with a shipping partner that understands your needs
            and exceeds your expectations. Thank you for choosing GlovoShipping
            – Where Every Shipment Matters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
