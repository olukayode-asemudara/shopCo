import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="space-y-5">
      {/* image box */}
      <div className="bg-[#F0EEED] p-3 rounded-3xl">
        <img src={product.images} alt="" />
      </div>

      {/* desc box */}
      <div className="space-y-2">
        <p className="text-lg font-bold">{product.title}</p>
        <div className="flex items-center gap-1">
          <Star className="text-yellow-500" />
          <Star className="text-yellow-500" />
          <Star className="text-yellow-500" />
          <Star className="text-yellow-500" />
          <Star className="text-yellow-500" />
        </div>
        <p className="text-2xl font-bold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
