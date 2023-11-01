import LogoSkilvul from "../../../assets/logo/skilvul-logo.svg";
import LogoKuylinerWhite from "../../../assets/logo/kuyliner-white-logo.svg";
import InstagramLogo from "../../../assets/logo/instagram-logo.svg";
import FacebookLogo from "../../../assets/logo/facebook-logo.svg";
import XLogo from "../../../assets/logo/x-logo.svg";
import DiscordLogo from "../../../assets/logo/discord-logo.svg";
import TelegramLogo from "../../../assets/logo/telegram-logo.svg";

function Footer() {
  return (
    <footer className="py-5 px-5 text-white bg-[#232023] ">
      <div className="flex justify-between align-middle ">
        <div className="w-80">
          <img src={LogoKuylinerWhite} className="h-10 w-32 my-3" />
          <p>Membagikan pengalaman terbaik bagi para UMKM dan Konsumen.</p>
          <div className="my-5">
            <h6 className="text-[#FFC836] font-extrabold text-lg">Kontak Kami</h6>
            <ul className="mt-1">
              <li>kuyliner@gmail.com</li>
              <li>+62123123782781</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <img src={LogoSkilvul} alt="" className="w-40 h-40 m-auto" />
        </div>
      </div>
      <div>
        <hr />
        <div className="flex justify-between align-middle mt-5 mx-6">
          <div className="my-auto">
            Copyright &copy; 2023 Kuyliner. All rights reserved.
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <a href="#">
                  <img src={InstagramLogo}  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={FacebookLogo}  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={XLogo}  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={DiscordLogo}  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={TelegramLogo}  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
