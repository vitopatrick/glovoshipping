const Hero = ({ title = "hero", subTitle }: any) => {
  return (
    <div
      style={{
        background:
          "url('https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundPosition: "center center",
      }}
      className="h-[60vh]"
    >
      {/* overlay */}
      <div className="w-full h-full bg-black/60">
        {/* container */}
        <div className="w-[90%] flex justify-center items-center h-full mx-auto">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h4 className="md:text-6xl text-5xl font-bold uppercase  text-white text-center font-head">
              {title}
            </h4>
            <p className="w-full mx-auto p-3 text-center text-white font-body md:w-[50%]">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
