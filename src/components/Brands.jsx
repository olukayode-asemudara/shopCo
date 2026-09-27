const images = [
  { id: 1, path: "./versace-logo.svg", alt: "versace-logo" },
  { id: 2, path: "./zara-logo.svg", alt: "zara-logo" },
  { id: 3, path: "./gucci-logo.svg", alt: "gucci-logo" },
  { id: 4, path: "./prada-logo.svg", alt: "prada-logo" },
  { id: 5, path: "./calvin-klein-logo.svg", alt: "calvin-klein-logo" },
];

const Brands = () => {
  return (
    <section className="bg-black">
      <div className="py-10 px-4 max-w-7xl mx-auto flex items-center justify-between">
        {images.map((image) => (
          <img key={image.id} src={image.path} alt={image.alt} />
        ))}
      </div>
    </section>
  );
};

export default Brands;
