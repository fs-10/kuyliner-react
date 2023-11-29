import { React, useState } from "react";
import LogoKuylinerBlack from "../../assets/logo/kuyliner-black-logo.svg";
import LogoLogin from "../../assets/img/photo Fill.png";
import { NavLink } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    console.log(user);
  };
  return (
    <section id="register" class="py-20">
      <div class="container">
        <div class="flex flex-wrap">
          <div div class="w-full self-center px-6 lg:w-1/2 mb-5">
            <img
              src={LogoLogin}
              alt="logo"
              className="h-30 w-30 left-20 right-0"
            />
          </div>

          <form>
            <div class="w-full self-end px-6 ml-18 sm:px-40 sm:pt-7">
              <div class="mb-8 w-full px-4 ">
                <img
                  src={LogoKuylinerBlack}
                  alt="logo"
                  className="h-14 bg-auto"
                />
                <h3 className="text-[#FFC836] font-extrabold text-2xl">
                  Membuat Akun
                </h3>
                <span className="">
                  Belum Punya Akun?
                  <NavLink
                    to="/register"
                    className="rounded-sm px-2 text-[#FFC836] font-bold"
                  >
                    Daftar
                  </NavLink>
                </span>
                <br></br>
                <br></br>
                <label for="email" class="text-base font-bold text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="example@email.com"
                  required
                  aria-describedby="email"
                  name="email"
                />
              </div>
              <div class="mb-8 w-full px-4">
                <label for="password" class="text-base font-bold text-primary">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Masukan password"
                  required
                  aria-describedby="password"
                  name="password"
                />
              </div>
              <div className="rounded-full border-solid border-2 border-yellow-300 px-10 flex flex-row gap-20 items-center justify-center flex-shrink-0 w-80 h-10 relative  mb-5 mt-2">
                <a href="#" className="rounded-sm  px-5 py-1 font-bold text-xl">
                  Submit
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
