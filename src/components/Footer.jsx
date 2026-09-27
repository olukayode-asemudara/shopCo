import { FaXTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa6";

const images = [
  {
    id: 1,
    path: "./Visa.svg",
  },
  {
    id: 2,
    path: "./mastercard.svg",
  },
  {
    id: 3,
    path: "./paypal.svg",
  },
  {
    id: 4,
    path: "./applePay.svg",
  },
  {
    id: 2,
    path: "./googlePay.svg",
  },
];

const Footer = () => {
  return (
    <footer>
      <div class="bg-white pt-16 pb-8 px-4 md:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-y-12 gap-x-8">
            <div class="max-w-sm">
              <a
                href="#"
                class="min-h-12 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <img src="./shopCo.svg" alt="logo" />
              </a>
              <div class="mt-6">
                <p class="text-slate-600 leading-relaxed text-sm">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              </div>

              <div class="mt-6">
                <div class="flex items-center space-x-3 mt-4">
                  <FaXTwitter />
                  <FaFacebook />
                  <FaInstagram />
                  <FaGithub />
                </div>
              </div>
            </div>

            <div class="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 sm:gap-x-8">
              <div>
                <h3 class="text-slate-900 text-sm font-semibold mb-6">Shop</h3>
                <ul class="space-y-4 text-slate-600 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Best Sellers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Deals & Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Bulk Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Orders
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-slate-900 text-sm font-semibold mb-6">
                  Customer Support
                </h3>
                <ul class="space-y-4 text-slate-600 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Track Your Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-slate-900 text-sm font-semibold mb-6">
                  About Us
                </h3>
                <ul class="space-y-4 text-slate-600 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Career Opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Company News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p class="text-slate-600 text-sm">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
            </div>

            {/* <!-- payment options cards --> */}
            <div class="flex flex-wrap gap-2">
              {images.map((image) => (
                <img key={image.id} src={image.path} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
