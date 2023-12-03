let links = [
  {
    title: "Compare Prices.",
    about:
      "Find the perfect price range for you by comparing prices from more than 50 local and international delivery companies. With multiple options, there is always one just right for you.",
  },
  {
    title: "Work with several usecases",
    about:
      "checkout solution for ecommerce, delivery integration for your product, fulfillment solution for your business, cross border freight for your supply chain",
  },
  {
    title: "Track Packages In Real-Time",
    about:
      "Keep sight of your package with real-time agent tracking. You can monitor your package and have customers also see its location at every step of the journey.",
  },
  {
    title: "Exact Delivery Date",
    about:
      "We strive to keep to our side of the bargain and deliver exactly as promised. Our exact delivery date keeps your mind at ease and your business growing.",
  },
  {
    title: "24/7 Customer Support",
    about:
      "Whether night or day, there is always someone waiting on the other side of the phone willing to put you and your customer’s satisfaction first. ",
  },
];

const MakeDeliveryWork = () => {
  return (
    <div className="space-y-3 leading-loose">
      {/* container */}
      <div className="w-[90%] md:w-[80%] mx-auto p-4">
        {/* header */}
        <div className="space-y-3 my-4">
          <h4 className="text-3xl font-head font-semibold">
            Finally Making Delivery <br /> Work For You
          </h4>
          <p className="font-body md:w-[50%]">
            Moving your goods from one point to the other doesn’t have to be a
            nightmare. Here’s how GlovoShipping works for you.
          </p>
        </div>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {links.map((link) => (
            <div key={link.about} className="p-3 border rounded">
              <h4 className="font-head font-bold">{link.title}</h4>
              <p className="font-body">{link.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakeDeliveryWork;
