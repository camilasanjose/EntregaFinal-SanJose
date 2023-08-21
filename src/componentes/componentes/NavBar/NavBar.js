import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom"




function NavBar() {
  return (
    <div className="bg-gray50 flex justify-around p-3">
      <Link
        to={"/"}
        className="mt-2 mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
      >
        <h2>NETA</h2>
      </Link>
      <nav className="pt-2">
        <NavLink
          to={"/category/new"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          New
        </NavLink>
        <NavLink
          to={"/category/remera"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Remeras
        </NavLink>
        <NavLink
          to={"/category/pantalon"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Pantalones
        </NavLink>
        <NavLink
          to={"/category/zapatilla"}
          className="mr-2 rounded-md border border-[#E5E7EB] py-2 px-4 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Zapatillas
        </NavLink>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;