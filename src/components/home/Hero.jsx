import React from "react";
import Button from "../MainButton";

const Hero = () => {
  return (
    <section
      className="w-full flex items-center h-[80vh]"
      style={{
        backgroundImage: "url('./heroImage.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2">
        <div className="col-span-[40%] space-y-8">
          <h1 className="text-7xl font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-black opacity-50 text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button text="Shop Now" />
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-5xl font-semibold">200+</h3>
              <span>International Brands</span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-5xl font-semibold">2,000+</h3>
              <span>High-Quality Products</span>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-5xl font-semibold">30,000+</h3>
              <span>Hapy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
