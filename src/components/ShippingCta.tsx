const ShippingCTA = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto p-4 ">
      <h2 className="text-3xl font-bold mb-4 font-head">
        Ready to Ship with Confidence?
      </h2>
      <p className="text-gray-700 mb-6 font-body">
        Discover the exceptional shipping services offered by GlovoShipping and
        experience a world of convenience and reliability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2 font-head">Global Reach</h3>
          <p className="font-body leading-loose">
            Connect your business with the world. Our extensive network ensures
            your shipments reach every corner of the globe.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-semibold mb-2 font-head">
            Express Delivery
          </h3>
          <p className="font-body leading-loose">
            Need it there fast? Choose our express delivery services for swift
            and timely transportation of your urgent shipments.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg ">
          <h3 className="text-xl font-semibold mb-2 font-head">
            Customs Made Easy
          </h3>
          <p className="font-body leading-loose">
            Let us handle the complexities of customs clearance. Streamline your
            international shipments with our expert assistance.
          </p>
        </div>
      </div>

      <p className="text-gray-700 font-body p-3 leading-loose">
        Your shipments matter, and at GlovoShipping, every package is a
        priority. Ship confidently with a partner dedicated to your success.
        Have questions? Our dedicated customer service team is ready to assist
        you. Join GlovoShipping and experience shipping like never before!
      </p>
    </div>
  );
};

export default ShippingCTA;
