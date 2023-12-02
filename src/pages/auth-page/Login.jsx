import { React, useState } from "react";
import LogoKuylinerBlack from "../../assets/logo/kuyliner-black-logo.svg";
import LogoLogin from "../../assets/img/photo Fill.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_API_URL}/user/signin`,
      user
    );

    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", data.userId);

    return navigate("/");
  };
  return (
    <section id="register" className="py-20">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-6 lg:w-1/2 mb-5">
            <img
              src={LogoLogin}
              alt="logo"
              className="h-30 w-30 left-20 right-0"
            />
          </div>

          <form>
            <div className="w-full self-end px-6 ml-18 sm:px-40 sm:pt-7">
              <div className="mb-8 w-full px-4 ">
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
                <label
                  htmlFor="email"
                  className="text-base font-bold text-primary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="example@email.com"
                  required
                  aria-describedby="email"
                  name="email"
                  autoComplete="username"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-8 w-full px-4">
                <label
                  htmlFor="password"
                  className="text-base font-bold text-primary"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Masukan password"
                  required
                  aria-describedby="password"
                  name="password"
                  autoComplete="current-password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <button
                onClick={handleLogin}
                className="rounded-full border-solid border-2 border-yellow-300 px-10 flex flex-row gap-20 items-center justify-center flex-shrink-0 w-80 h-10 relative  mb-5 mt-2"
              >
                <a className="rounded-sm  px-5 py-1 font-bold text-xl">
                  Submit
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
