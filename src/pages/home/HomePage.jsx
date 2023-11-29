import DaftarPenjual from "../../components/sections/daftarpenjual/DaftarPenjual";
import HeroSectionTwo from "../../components/sections/herosection-two/HeroSectionTwo";
import HeroSection from "../../components/sections/herosection/HeroSection";
import MenuSection from "../../components/sections/menusection/MenuSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroSectionTwo />
      <MenuSection />
      <DaftarPenjual />
    </>
  );
}

export default HomePage
