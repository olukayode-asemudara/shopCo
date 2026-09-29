const CartSection = () => {
  return (
    <main class="mt-6 px-4 md:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex gap-2 border-b border-slate-300 pb-4">
          <h1 class="text-2xl font-bold text-slate-900 flex-1">
            Shopping Cart
          </h1>
          <p class="text-base text-slate-900 font-medium">4 Items</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-12">
          <ul class="lg:col-span-2 divide-y divide-slate-300">
            <li class="flex flex-col gap-6 py-6 sm:items-center sm:flex-row">
              <div class="w-32 h-full shrink-0 bg-[#F0EEED] p-3 rounded-lg">
                <img
                  src="https://readymadeui.com/images/black-sweaters-1.webp"
                  class="w-full aspect-full object-contain"
                  alt="sweater"
                />
              </div>

              <div class="flex items-start gap-4 w-full">
                <div>
                  <h3 class="text-base font-semibold text-slate-900 mb-2">
                    Sweater
                  </h3>
                  <div class="space-y-2">
                    <p class="text-sm text-slate-600">
                      Size: <span class="ml-2 font-medium">MD</span>
                    </p>
                    <p class="text-sm text-slate-600">
                      Color: <span class="ml-2 font-medium">Black</span>
                    </p>

                    <p class="text-sm text-slate-600">
                      Price: <span class="ml-2 font-bold">$120</span>
                    </p>
                  </div>
                </div>

                <div class="ml-auto text-right">
                  {/* <!-- price --> */}
                  <div class="mt-6">
                    <p class="text-base font-semibold text-slate-900">$18.50</p>
                    <p class="text-base text-slate-500 mt-1">
                      <strike class="font-medium">$22.50</strike>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          {/* <!-- Order Summary --> */}
          <div class="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0">
            <h3 class="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-4">
              Order Summary
            </h3>
            <ul class="text-slate-600 font-medium divide-y divide-slate-300 mt-4">
              <li class="flex flex-wrap gap-4 text-sm py-3">
                Subtotal{" "}
                <span class="ml-auto font-semibold text-slate-900">$56.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm py-3">
                Shipping{" "}
                <span class="ml-auto font-semibold text-slate-900">$4.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm py-3">
                Tax{" "}
                <span class="ml-auto font-semibold text-slate-900">$4.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm py-3 font-semibold text-slate-900">
                Total
                <span class="ml-auto">$64.00</span>
              </li>
            </ul>

            {/* <!-- action buttons --> */}
            <div class="mt-6 space-y-3 text-center">
              <button
                type="button"
                class="w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Proceed to Checkout
              </button>
              <a
                href="#"
                class="inline-block text-blue-700 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Continue Shopping
              </a>
            </div>

            {/* <!-- Promo Code Form --> */}
            <form class="max-w-sm mt-8">
              <label
                for="promocode"
                class="mb-2 block text-sm font-medium text-slate-900"
              >
                Do you have a promo code?
              </label>
              <div class="flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  id="promocode"
                  name="promocode"
                  required
                  placeholder="Enter promo code"
                  autocomplete="postal-code"
                  class="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
                <button
                  type="submit"
                  class="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
