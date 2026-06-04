import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import Signup from "./pages/Signup/Signup";
import AboutPage from "./pages/About/AboutPage";
import ProductPage from "./pages/Products/ProductPage";
import PricingPage from "./pages/Pricing/PricingPage";
import SupportPage from "./pages/Support/SupportPage";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import Pricing from "./pages/Home/Pricing";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
