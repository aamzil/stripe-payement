import React from "react";
import Overview from "./components/Overview";
import Cart from "./components/Cart";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCart([product]);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/cancel" element={<Cancel />}></Route>
          <Route
            path="/"
            element={<Overview isCart={cart} addToCart={addToCart} />}
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* Navbar */}
      <div className="flex justify-between px-10 top-0 fixed py-5 w-[100%] text-xl items-center">
        <span className="font-semibold text-2xl">AYOUB'S SHOP</span>
        <button
          onClick={toggleCartVisibility}
          className="flex gap-2 items-center"
        >
          Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>shopping_cart_2_line</title>
            <g id="shopping_cart_2_line" fill="none">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
              <path
                fill="#09244BFF"
                d="M9 20a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M3.495 2.631l.105.07 1.708 1.28a2 2 0 0 1 .653.848l.06.171h12.846a2 2 0 0 1 1.998 2.1l-.013.148-.457 3.655a5 5 0 0 1-4.32 4.34l-.226.023-7.313.61.26 1.124H17.5a1 1 0 0 1 .117 1.993L17.5 19H8.796a2 2 0 0 1-1.906-1.393l-.043-.157-2.74-11.87L2.4 4.3a1 1 0 0 1 .985-1.723zM18.867 7H6.487l1.595 6.906 7.6-.633a3 3 0 0 0 2.728-2.617z"
              />
            </g>
          </svg>
        </button>
      </div>
      {/* Navbar */}

      {isCartVisible && <Cart cart={cart} setCart={setCart} />}
    </div>
  );
}

export default App;
