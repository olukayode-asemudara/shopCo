import { ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";

const CartSection = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <main className="mt-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-2 border-b border-slate-300 pb-4">
          <h1 className="text-2xl font-bold text-slate-900 flex-1">
            Home / Cart
          </h1>

          <p className="text-base text-slate-900 font-medium">
            {items.length} Items
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <ul className="lg:col-span-2 divide-y divide-slate-300">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-6 py-6 sm:items-center sm:flex-row"
              >
                <div className="w-32 h-full shrink-0 bg-[#F0EEED] p-3 rounded-lg">
                  <img
                    src={item.images[0]}
                    className="w-full aspect-full object-contain"
                    alt={item.title}
                  />
                </div>

                <div className="flex items-start gap-4 w-full">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600">
                      Price:
                      <span className="ml-2 font-bold">${item.price}</span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0">
            <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-4">
              Order Summary
            </h3>

            <ul className="text-slate-600 font-medium divide-y divide-slate-300 mt-4">
              <li className="flex flex-wrap gap-4 text-sm py-3">
                Subtotal
                <span className="ml-auto font-semibold text-slate-900">
                  $56.00
                </span>
              </li>

              <li className="flex flex-wrap gap-4 text-sm py-3">
                Shipping
                <span className="ml-auto font-semibold text-slate-900">
                  $4.00
                </span>
              </li>

              <li className="flex flex-wrap gap-4 text-sm py-3">
                Tax
                <span className="ml-auto font-semibold text-slate-900">
                  $4.00
                </span>
              </li>

              <li className="flex flex-wrap gap-4 text-sm py-3 font-semibold text-slate-900">
                Total
                <span className="ml-auto">$64.00</span>
              </li>
            </ul>

            <div className="mt-6 space-y-3 text-center">
              <button
                type="button"
                className="w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-black hover:bg-black border border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Proceed to Checkout
              </button>

              <a
                href="#"
                className="inline-block text-black text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                Continue Shopping
              </a>
            </div>

            <form className="max-w-sm mt-8">
              <label
                htmlFor="promocode"
                className="mb-2 block text-sm font-medium text-slate-900"
              >
                Do you have a promo code?
              </label>

              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  id="promocode"
                  name="promocode"
                  required
                  placeholder="Enter promo code"
                  autoComplete="postal-code"
                  className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-black"
                />

                <button
                  type="submit"
                  className="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-black bg-black hover:bg-black transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartSection;
