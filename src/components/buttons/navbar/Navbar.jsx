import LogoKuylinerBlack from "../../../assets/logo/kuyliner-black-logo.svg";
import UserConsumer from "../../../assets/logo/user-unsign-logo.svg";
import { NavLink } from "react-router-dom";
import HeroSectionTwo from "../../sections/herosection-two/HeroSectionTwo";
import { useEffect, useState } from "react";

function Navbar() {

  const [user, setUser] = useState();

  useEffect(() => {

  });

  const check = localStorage.getItem("token");
  console.log(check);

  return (
    <nav className="py-3 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src={LogoKuylinerBlack} alt="" className="w-28" />
        </NavLink>

        <div className="flex items-center">
          <NavLink
            className="flex items-center gap-2 border-2 rounded-xl border-stone-500 py-2 px-3"
            to="/login"
          >
            <img src={UserConsumer} /> Masuk
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
