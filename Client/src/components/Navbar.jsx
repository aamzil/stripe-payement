import React from "react";
import Cart from "./Cart";

function Navbar({ cart }) {
  return (
    <div className="flex justify-between px-10 top-0 fixed py-5 w-[100%] text-xl items-center">
      <span className="font-semibold text-2xl">AYOUB'S SHOP</span>
      <button className="flex gap-2 items-center">
        Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>shopping_cart_1_line</title>
          <g id="shopping_cart_1_line" fill="none" fill-rule="evenodd">
            <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
            <path
              fill="#09244BFF"
              d="M7.5 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M3.138 2A3 3 0 0 1 6.13 4.786L6.145 5h13.657a2 2 0 0 1 1.968 2.358l-1.637 9A2 2 0 0 1 18.165 18H6.931a2 2 0 0 1-1.995-1.858l-.8-11.213A1 1 0 0 0 3.137 4H3a1 1 0 0 1 0-2zm16.664 5H6.288l.643 9h11.234z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
