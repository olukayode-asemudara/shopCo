import React from "react";
import Button from "../MainBtutton";

const Hero = () => {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage: "url('./heroImage.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "50vh",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2">
        <div>
          <h1 className="text-5xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button text="Shop Now" />
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <h3>200+</h3>
              <span>International Brands</span>
            </div>

            <div className="flex flex-col gap-1">
              <h3>2,000+</h3>
              <span>High-Quality Products</span>
            </div>

            <div className="flex flex-col gap-1">
              <h3>30,000+</h3>
              <span>Hapy Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
