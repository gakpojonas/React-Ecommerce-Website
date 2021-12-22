import React from "react";
import Category2 from "../Category2";
import Cart from "../Cart";
import { Routes, Route } from "react-router-dom";

function Routess({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Category2
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/cart"
          exact
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default Routess;
