import { ChevronRight, Star, ArrowRight, ArrowLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    user: "Sarah M.",
    rating: 5,
    message:
      "I'm blown away by the quality and style of the clothes I received from Shop.co.",
  },
  {
    id: 2,
    user: "Alex K.",
    rating: 4,
    message:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co.",
  },
  {
    id: 3,
    user: "James L.",
    rating: 3,
    message:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.",
  },
  {
    id: 4,
    user: "Samuel L.",
    rating: 3,
    message:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.",
  },
  {
    id: 5,
    user: "John Snow",
    rating: 3,
    message:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.",
  },
  {
    id: 6,
    user: "Snow J.",
    rating: 3,
    message:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.",
  },
  {
    id: 7,
    user: "Mike T.",
    rating: 3,
    message:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-10 my-16 w-full">
      <div className="flex items-end justify-between mb-10 w-full">
        <h2 className="text-3xl md:text-5xl font-black text-black font-serif tracking-tight">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="hidden sm:flex items-center gap-3">
          <button
            className="p-2 text-black hover:text-gray-500 transition-colors focus:outline-none"
            aria-label="Previous reviews"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          <button
            className="p-2 text-black hover:text-gray-500 transition-colors focus:outline-none"
            aria-label="Next reviews"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
        {mockReviews.map((review) => (
          <div
            key={review.id}
            className="w-full md:w-[32%] border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between bg-white"
          >
            <div>
              <div className="flex items-center gap-1 mb-4 text-[#FFC700]">
                {[...Array(review.rating)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-black">
                  {review.reviewerName}
                </span>
                <svg
                  className="w-5 h-5 text-[#01B316] fill-current"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.03 12.47l-2.72-2.72a.75.75 0 011.06-1.06l2.19 2.19 5.19-5.19a.75.75 0 011.06 1.06l-5.72 5.72a.75.75 0 01-1.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-normal">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
