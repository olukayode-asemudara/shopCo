const Navbar = () => {
  return (
    <>
      <header class="border-b border-gray-200 bg-white">
        <div class="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a href="#" title="" class="flex items-center text-xl">
            <span class="font-bold">Go</span>
            <span class="">Wrong</span>
            <span class="ml-1 rounded-lg border-2 border-lime-600 px-1 text-base font-medium text-lime-600 dark:border-lime-300 dark:text-lime-300">
              2.0
            </span>
          </a>

          <div class="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    class="border-b-2  pb-5 text-sm font-medium text-gray-900"
                    href="#"
                  >
                    {" "}
                    Dashboard{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Teams{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Calendar{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="relative hidden sm:block">
                <label class="sr-only" for="search">
                  {" "}
                  Search{" "}
                </label>

                <input
                  class="h-10 w-full rounded-lg border-none bg-gray-100 ps-4 pe-10 text-sm shadow-sm sm:w-56"
                  id="search"
                  type="search"
                  placeholder="Search website..."
                />

                <button
                  type="button"
                  class="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-white p-2 text-gray-600 transition hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200"
                >
                  <span class="sr-only">Search</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <a href="#" class="hidden shrink-0 sm:block">
                <span class="sr-only">Profile</span>
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  class="h-10 w-10 rounded-full object-cover"
                />
              </a>

              <button class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800">
                <span class="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
