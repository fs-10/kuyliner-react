import "./index.css";
import Navbar from "./components/buttons/navbar/navbar";
import Footer from "./components/sections/footer/Footer";
import PageRoutes from "./pages/PageRoutes";

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
