import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/shared/Footer";
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
import RegisterPage from "./pages/RegisterPage";

function App() {
  const url = process.env.SERVER_URL;
  console.log({ url });

  // const testFetch = async () => {
  //   try {
  //     const response = await fetch(`${String(url)}/products`);
  //     const data = response.json();
  //     console.log({ data });
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
  // React.useEffect(() => {
  //   testFetch();
  //   return () => {
  //     testFetch();
  //   };
  // }, []);

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
        <Route path="/register" element={<RegisterPage />} />

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
      <Footer />
    </Router>
  );
}
export default App;
