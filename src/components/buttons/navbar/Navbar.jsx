import LogoKuylinerBlack from "../../../assets/logo/kuyliner-black-logo.svg";
import UserConsumer from "../../../assets/logo/user-unsign-logo.svg";
import { NavLink } from "react-router-dom";
import HeroSectionTwo from "../../sections/herosection-two/HeroSectionTwo";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  const [user, setUser] = useState();

  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    (async () => {
      await axios
        .get(`${import.meta.env.VITE_PUBLIC_API_URL}/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setUser(data));
    })();
  }, []);

  const dataUser = user ? user.data : "";

  return (
    <nav className="py-3 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/">
          <img src={LogoKuylinerBlack} alt="" className="w-28" />
        </NavLink>

        <div className="flex items-center">
          {user ? (
            <NavLink
              className="flex items-center gap-2 border-2 rounded-xl border-stone-500 py-2 px-3"
              to="/profile"
            >
              <img
                src={
                  dataUser.profile_image != ""
                    ? dataUser.profile_image
                    : UserConsumer
                }
              />
              {dataUser.username}
            </NavLink>
          ) : (
            <NavLink
              className="flex items-center gap-2 border-2 rounded-xl border-stone-500 py-2 px-3"
              to="/login"
            >
              <img src={UserConsumer} /> Masuk
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
