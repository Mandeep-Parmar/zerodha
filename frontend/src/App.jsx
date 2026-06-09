import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Home/HomePage";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import AboutPage from "./pages/About/AboutPage";
import ProductPage from "./pages/Products/ProductPage";
import PricingPage from "./pages/Pricing/PricingPage";
import SupportPage from "./pages/Support/SupportPage";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
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
