import { Link } from "react-router";
import { ChevronDown, Search } from "lucide-react";
import { FaCartShopping, FaPerson, FaPersonRifle } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const menus = [
  { id: 1, icon: ChevronDown, path: "#shop", tag: "Shop" },
  { id: 2, path: "#sale", tag: "On Sale" },
  { id: 3, path: "#arrivals", tag: "New Arrivals" },
  { id: 4, path: "#brnds", tag: "Brands" },
];

const Navbar = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-5 flex items-center justify-between">
        <Link to="/">
          <img className="h-5 w-auto" src="./shopCo.svg" alt="" />
        </Link>

        <ul className="flex gap-10 justify-between items-center">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <li key={menu.id}>
                <Link
                  to={menu.path}
                  className="font-semibold text-gray-600 flex items-center gap-1"
                >
                  {menu.tag}

                  {Icon && <Icon size={16} />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-5">
          <div className="p-3 bg-[#F0F0F0] flex items-center rounded-full">
            <Search className="text-gray-400" />

            <input
              className="outline-0 pl-3 text-gray-500 font-normal"
              type="text"
            />
          </div>

          <div className="flex gap-5">
            <Link to="/cart">
              <FaCartShopping className="text-xl" />
            </Link>
            <Link to="#">
              <FaUserCircle className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
