import React from "react";

const Hero = () => {
  return (
    <>
      {/* <!-- hero section --> */}
      <section
        class="px-4 md:px-8 mt-12"
        style={{
          backgroundImage: "url('./heroImage.svg')",
        }}
      >
        <div class="max-w-7xl mx-auto">
          <div class="grid justify-center items-center gap-x-12 gap-y-16 lg:grid-cols-2">
            <div>
              <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                <p class="mb-2 font-medium text-blue-700 text-sm uppercase">
                  <span class="rotate-90 inline-block mr-2">|</span> Built to
                  Grow with You
                </p>
                <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                  FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p class="text-slate-600 text-lg leading-relaxed">
                  Showcase your products and connect with your audience. Our
                  all-in-one platform helps you manage operations and boost
                  visibility — whether you're in fashion, beauty, wellness, or
                  beyond.
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="#"
                    class="py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Get Started Free
                  </a>
                  <a
                    href="#"
                    class="py-2.5 px-4 text-slate-900 text-sm font-semibold rounded-md bg-white border border-slate-300 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Explore Features
                  </a>
                </div>
              </div>

              <div class="mt-12">
                <div class="grid gap-x-4 gap-y-6 text-center sm:grid-cols-3 lg:text-left">
                  <div class="flex flex-col">
                    <h5 class="text-blue-700 font-semibold text-2xl mb-2">
                      10+
                    </h5>
                    <p class="text-base text-slate-600 font-medium">
                      Years Experience
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <h5 class="text-blue-700 font-semibold text-2xl mb-2">
                      890
                    </h5>
                    <p class="text-base text-slate-600 font-medium">
                      Cases Solved
                    </p>
                  </div>
                  <div class="flex flex-col">
                    <h5 class="text-blue-700 font-semibold text-2xl mb-2">
                      250
                    </h5>
                    <p class="text-base text-slate-600 font-medium">
                      Business Partners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
