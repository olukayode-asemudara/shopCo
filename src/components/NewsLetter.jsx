import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 max-w-7xl mx-auto bg-black rounded-3xl p-10">
        <h2 className="col-span-[60%] text-white text-4xl font-bold">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="col-span-[40%] flex flex-col space-y-2">
          <input className="bg-white rounded-full p-3 outline-0" type="text" />
          <button className="bg-white p-3 rounded-full font-semibold">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
