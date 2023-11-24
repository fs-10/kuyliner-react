import "./index.css";

import Footer from "./components/sections/footer/Footer";
import PageRoutes from "./pages/PageRoutes";
import Navbar from "./components/buttons/navbar/Navbar";
import MenuSection from "./components/sections/menusection/MenuSection";
import DaftarPenjual from "./components/sections/daftarpenjual/DaftarPenjual";

function App() {
  return (
    <>
      <Navbar />
      <PageRoutes />
      <MenuSection />
      <DaftarPenjual />
      <Footer />
    </>
  );
}

export default App;
