import React from "react";
// React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// Commponents
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import ScrollTop from "./components/ScrollTop";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="overflow-hidden min-h-[100vh] flex flex-col">
      <Router>
        <ScrollTop />
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
