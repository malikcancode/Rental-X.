import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Loading from "./Pages/Loading";
import ProtectedRoute from "./context/ProtectedRoute";
import NotFound from "./Pages/NotFound";

const Navbar = lazy(() => import("./Pages/Navbar"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const CarDetails = lazy(() => import("./Pages/CarDetails"));
const SelectCars = lazy(() => import("./Pages/SelectCars"));
const Login = lazy(() => import("./Pages/Login"));
const Cart = lazy(() => import("./Pages/Cart"));
const StripePayment = lazy(() => import("./Pages/PaymentForm"));
const About = lazy(() => import("./Pages/About"));

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
            <Route path="/select-cars" element={<SelectCars />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<StripePayment />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;
