import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Category } from "./components/Category/Category";
import { CartProvider } from "./context/CartContext";

import { Routes, Route, useNavigate } from "react-router-dom";
import "./styles/main.scss";
import data from "./data.json"; // TODO

function App() {
  const navigate = useNavigate();

  const setDefaultRoute = () => {
    navigate("/category/women/t-shirt");
  };

  useEffect(() => {
    setDefaultRoute();
  }, []);

  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route
            path="/category/:category/:subcategory?"
            element={<Category data={data} />}
          />
        </Routes>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
