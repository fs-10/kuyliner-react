import DaftarPenjual from "../../components/sections/daftarpenjual/DaftarPenjual";
import HeroSectionTwo from "../../components/sections/herosection-two/HeroSectionTwo";
import HeroSection from "../../components/sections/herosection/HeroSection";
import MenuSection from "../../components/sections/menusection/MenuSection";
import SearchSection from "../../components/sections/search/SearchSection";

function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroSectionTwo />
      <SearchSection />
      <MenuSection />
      <DaftarPenjual />
    </>
  );
}

export default HomePage
