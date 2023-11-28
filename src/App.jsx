import "./index.css";

import Footer from "./components/sections/footer/Footer";
import PageRoutes from "./pages/PageRoutes";
import Navbar from "./components/buttons/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <PageRoutes />
      <Footer />
    </>
  );
}

export default App;
