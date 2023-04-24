import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import {
  AboutPage,
  CartPage,
  ErrorPage,
  HomePage,
  PrivateRoutePage,
  ProductsPage,
  SingleProductPage,
} from "./pages";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/checkout"
          element={
            <PrivateRoutePage>
              <CartPage />
            </PrivateRoutePage>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
