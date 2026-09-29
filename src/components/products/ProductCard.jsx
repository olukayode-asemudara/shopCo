import { Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="space-y-5 cursor-pointer"
    >
      {/* image box */}
      <div className="bg-[#F0EEED] p-3 rounded-3xl">
        <img src={product.images[0]} alt="" />
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
