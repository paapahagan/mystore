import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./context/ProductContext.jsx";
import CategoryProvider from "./context/CategoryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CategoryProvider>
);
