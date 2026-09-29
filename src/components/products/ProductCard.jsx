import { Star } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
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
      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(addToCart(product));
        }}
        className="cursor-pointer border py-3 font-semibold px-12 rounded-full"
      >
        add to cart
      </button>
    </div>
  );
};

export default ProductCard;
