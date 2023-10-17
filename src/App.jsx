import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import Product from "./components/Product";
import ProductDetails from "./pages/ProductDetails";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Product />} />
          <Route path="/category" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <SideBar />
      </Router>
    </>
  );
}

export default App;
