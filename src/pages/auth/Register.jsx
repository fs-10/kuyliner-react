import { React, useState } from "react";
import LogoKuylinerBlack from "../../assets/logo/kuyliner-black-logo.svg";
import LogoLogin from "../../assets/img/photo Fill.png";

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
                  Belum Punya Akun?
                  <a
                    href="./register"
                    className="rounded-sm px-2 text-[#FFC836] font-bold"
                  >
                    Daftar
                  </a>
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

              <div class="rounded-full border-solid border-2 border-yellow-300 p-3 flex flex-row gap-2 items-center justify-center flex-shrink-0 w-80 h-12 relative overflow-hidden">
                <button>
                  <svg
                    class="flat-color-icons-google"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.8055 10.5415H21V10.5H12V14.5H17.6515C16.827 16.8285 14.6115 18.5 12 18.5C8.6865 18.5 6 15.8135 6 12.5C6 9.1865 8.6865 6.5 12 6.5C13.5295 6.5 14.921 7.077 15.9805 8.0195L18.809 5.191C17.023 3.5265 14.634 2.5 12 2.5C6.4775 2.5 2 6.9775 2 12.5C2 18.0225 6.4775 22.5 12 22.5C17.5225 22.5 22 18.0225 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M3.15283 7.8455L6.43833 10.255C7.32733 8.054 9.48033 6.5 11.9998 6.5C13.5293 6.5 14.9208 7.077 15.9803 8.0195L18.8088 5.191C17.0228 3.5265 14.6338 2.5 11.9998 2.5C8.15883 2.5 4.82783 4.6685 3.15283 7.8455Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M12.0002 22.5001C14.5832 22.5001 16.9302 21.5116 18.7047 19.9041L15.6097 17.2851C14.5719 18.0743 13.3039 18.5011 12.0002 18.5001C9.39916 18.5001 7.19066 16.8416 6.35866 14.5271L3.09766 17.0396C4.75266 20.2781 8.11366 22.5001 12.0002 22.5001Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M21.8055 10.5415H21V10.5H12V14.5H17.6515C17.2571 15.6082 16.5467 16.5766 15.608 17.2855L15.6095 17.2845L18.7045 19.9035C18.4855 20.1025 22 17.5 22 12.5C22 11.8295 21.931 11.175 21.8055 10.5415Z"
                      fill="#1976D2"
                    />
                  </svg>
                  <a href="" class="text-decoration-none">
                    Google
                  </a>
                </button>
              </div>
              <a href="" class="align-center mt-10">
                Lupa Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
