import LogoKuylinerBlack from "../../../assets/logo/kuyliner-black-logo.svg";
import UserConsumer from "../../../assets/logo/user-unsign-logo.svg";
import { NavLink } from "react-router-dom";
import HeroSectionTwo from "../../sections/herosection-two/HeroSectionTwo";

function Navbar() {
  return (
    <nav className="py-3 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src={LogoKuylinerBlack} alt="" />
        </NavLink>

        <div className="flex items-center">
          <NavLink
            className="flex items-center gap-2 border-2 rounded-xl border-stone-500 py-2 px-3"
            to="/"
          >
            <img src={UserConsumer} alt="" /> Masuk
          </NavLink>
        </div>
      </div>
    </nav>

    // <nav className="bg-[#F9FBFD] flex items-center justify-between px-16 py-4">
    //   <div className="">
    //     <NavLink to="/">
    //       <img src={LogoKuylinerBlack} alt="" className="h-14" />
    //     </NavLink>
    //   </div>

    //   <div>
    //     <NavLink to="/profile">
    //       <div className="border-2 border-black rounded-full overflow-hidden">
    //         <img src={UserConsumer} alt="" className="h-10" />
    //       </div>
    //     </NavLink>
    //   </div>

    //   <ul className="flex gap-7 font-bold text-xl">
    //     <li>
    //       <NavLink
    //         to="/"
    //         className="hover:text-[#FFC836] transition-all ease-in-out delay-150"
    //       >
    //         Home
    //       </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         to="/article"
    //         className="hover:text-[#FFC836] transition-all ease-in-out delay-150"
    //       >
    //         Article
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Navbar;
