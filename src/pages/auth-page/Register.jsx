import { React, useState } from "react";
import LogoKuylinerBlack from "../../assets/logo/kuyliner-black-logo.svg";
import LogoLogin from "../../assets/img/photo Fill.png";
import { NavLink } from "react-router-dom";

function Register() {
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
    <section id="register" class="pb-32">
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
                  Sudah punya akun?
                  <NavLink
                    href="/login"
                    className="rounded-sm px-2 text-[#FFC836] font-bold"
                  >
                    Login
                  </NavLink>
                </span>
              </div>
              <div class="w-full flex flex-col gap-1" style={{padding: "0 !important"}}>
                <label for="username" class="text-base font-bold text-primary">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                  aria-describedby="email"
                  name="email"
                />
                <label for="firstname" class="text-base font-bold text-primary">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                  aria-describedby="email"
                  name="email"
                />
                <label for="lastname" class="text-base font-bold text-primary">
                  Last Name (optional)
                </label>
                <input
                  type="text"
                  id="lastname"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                  aria-describedby="email"
                  name="email"
                />
                <label for="email" class="text-base font-bold text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                  aria-describedby="email"
                  name="email"
                />
                <label for="password" class="text-base font-bold text-primary">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                  aria-describedby="password"
                  name="password"
                />
                <label for="confirm-password" class="text-base font-bold text-primary">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  class="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                  aria-describedby="password"
                  name="password"
                />
              </div>
              <div className="rounded-full border-solid border-2 border-yellow-300 px-10 flex flex-row gap-20 items-center justify-center flex-shrink-0 w-80 h-10 relative  mb-5 mt-10">
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

export default Register;