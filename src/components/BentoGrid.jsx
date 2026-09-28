const BentoGrid = () => {
  return (
    <div>
      <h2 className="text-center font-extrabold text-5xl mb-10">
        BROWSE BY DRESS STYLE
      </h2>
      <div className="bg-[#F0F0F0] rounded-2xl p-15 grid grid-cols-12 gap-4 max-w-7xl mx-auto">
        <div
          style={{
            backgroundImage: "url('./casual.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "start",
          }}
          className="h-[30vh] col-span-4 bg-amber-200 rounded-2xl p-10"
        >
          <span className="text-4xl font-semibold">Casual</span>
        </div>

        <div
          style={{
            backgroundImage: "url('./formal.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "start",
          }}
          className="h-[30vh] col-span-8 bg-red-300 rounded-2xl p-10"
        >
          <span className="text-4xl font-semibold">Formal</span>
        </div>

        <div
          style={{
            backgroundImage: "url('./party.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "start",
          }}
          className="h-[30vh] col-span-8 bg-green-300 rounded-2xl p-10"
        >
          <span className="text-4xl font-semibold">Party</span>
        </div>

        <div
          style={{
            backgroundImage: "url('./gym.svg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "start",
          }}
          className="h-[30vh] col-span-4 bg-slate-300 rounded-2xl p-10"
        >
          <span className="text-4xl font-semibold">Gym</span>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
