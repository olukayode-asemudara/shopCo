import { Link } from "react-router";
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
    id: 5,
    path: "./googlePay.svg",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-white pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-y-12 gap-x-8">
            <div className="max-w-sm">
              <Link
                to="#"
                className="min-h-12 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <img className="h-5 w-auto" src="./shopCo.svg" alt="logo" />
              </Link>
              <div className="mt-6">
                <p className="text-slate-600 leading-relaxed text-sm">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              </div>

              <div className="mt-6">
                <div className="flex items-center space-x-3 mt-4">
                  <FaXTwitter />
                  <FaFacebook />
                  <FaInstagram />
                  <FaGithub />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 sm:gap-x-8">
              <div>
                <h3 className="text-slate-900 text-sm font-semibold mb-6">
                  Shop
                </h3>
                <ul className="space-y-4 text-slate-600 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Best Sellers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Deals & Offers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Categories
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Gift Cards
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Bulk Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Orders
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-slate-900 text-sm font-semibold mb-6">
                  Customer Support
                </h3>
                <ul className="space-y-4 text-slate-600 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Track Your Order
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Chat
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-slate-900 text-sm font-semibold mb-6">
                  About Us
                </h3>
                <ul className="space-y-4 text-slate-600 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Career Opportunities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Company News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Investor Relations
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="text-slate-600 text-sm">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
            </div>

            {/* <!-- payment options cards --> */}
            <div className="flex flex-wrap gap-2">
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
