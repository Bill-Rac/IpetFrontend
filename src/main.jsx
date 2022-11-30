import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Navbar from "./components/Navbar/Navbar";
import Navbar2 from "./components/Navbar2/Navbar2";
import Slider from "./components/Slider/Slider";
import Products from "./components/Products/index";
import { productData } from "./components/Products/Data";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "./globalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Navbar />
      <Navbar2 />
      <Slider />
      <App />
      <Products heading="POPULAR DEALS" data={productData} />
    </Router>
  </React.StrictMode>
);
