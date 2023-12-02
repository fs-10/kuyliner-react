import { React, useState } from "react";
import LogoKuylinerBlack from "../../assets/logo/kuyliner-black-logo.svg";
import LogoLogin from "../../assets/img/photo Fill.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_API_URL}/user/signup`,
      {
        username: user.username,
        email: user.email,
        password: user.password,
        first_name: user.firstName,
        last_name: user.lastName,
      }
    );

    return navigate("/login");
  };
  return (
    <section id="register" className="pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-6 lg:w-1/2 mb-5">
            <img
              src={LogoLogin}
              alt="logo"
              className="h-30 w-30 left-20 right-0"
            />
          </div>

          <section>
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
                <span>
                  Sudah punya akun?
                  <NavLink
                    to="/login"
                    className="rounded-sm px-2 text-[#FFC836] font-bold"
                  >
                    Login
                  </NavLink>
                </span>
              </div>
              <form
                className="w-full flex flex-col gap-1"
                style={{ padding: "0 !important" }}
              >
                <label
                  htmlFor="username"
                  className="text-base font-bold text-primary"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                  autoComplete="username"
                  required
                />
                <label
                  htmlFor="firstname"
                  className="text-base font-bold text-primary"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInput}
                  required
                />
                <label
                  htmlFor="lastname"
                  className="text-base font-bold text-primary"
                >
                  Last Name (optional)
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInput}
                />
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
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  required
                />
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
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  autoComplete="current-password"
                  required
                />
                {/* <label
                  htmlFor="confirm-password"
                  className="text-base font-bold text-primary"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full rounded-md bg-slate-100 p-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                  value={user.verifyPassword}
                  onChange={handleInput}
                  autoComplete="current-password"
                /> */}
              </form>
              <NavLink
                to={"/login"}
                onClick={handleRegister}
                className="rounded-full border-solid border-2 border-yellow-300 px-10 flex flex-row gap-20 items-center justify-center flex-shrink-0 w-80 h-10 relative  mb-5 mt-10"
              >
                <p className="rounded-sm  px-5 py-1 font-bold text-xl">
                  Submit
                </p>
              </NavLink>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Register;
