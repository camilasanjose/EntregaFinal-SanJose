import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom"




function NavBar() {
  return (
   
    <div className="bg-gray50 flex justify-around p-5">
      <Link
        to={"/"}
        className="inline-block rounded-full border border-[#edeef1] py-11 px-3 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
      >
        <h2>NETA</h2>
      </Link>
      <nav className="pt-6">
        <NavLink
          to={"/category/new"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          New
        </NavLink>
        <NavLink
          to={"/category/remera"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Remeras
        </NavLink>
        <NavLink
          to={"/category/pantalon"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Pantalones
        </NavLink>
        <NavLink
          to={"/category/zapatilla"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Zapatillas
        </NavLink>
        <NavLink
          to={"/category/camperas"}
          className="inline-block rounded-full border border-[#E5E7EB] py-3 px-7 text-base font-medium text-body-color transition hover:border-white hover:bg-black hover:text-white"
        >
          Camperas
        </NavLink>
      </nav>
      <CartWidget />
    </div>
  );
}

export default NavBar;