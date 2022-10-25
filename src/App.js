import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import HomePages from "./pages/homePages/HomePages";
import ProductPages from "./pages/productPage/ProductPages";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ErrorBlog from "./component/errorBlog/ErrorBlog";
import LoginPages from "./pages/loginPages/LoginPages";
import Dashboard from "./pages/dashboardPages/Dashboard";
import { useEffect, useState } from "react";

import CreateAd from "./pages/createAd/CreateAd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "./api/Api";
import {store} from './redux/index'

function App() {
 

  const [isLoading, setLoading] = useState(true);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    Api.getProjec()

      .finally(() => {
        setLoading(false);
      })
      .then((res) => {
        setArr(res.data);
      });
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/pages" element={"pages"} />
        <Route path="/product/:id" element={<ProductPages />} />
        <Route path="*" element={<ErrorBlog />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/create-ad" element={<CreateAd />} />
        <Route
          path="/dashboard"
          element={<Dashboard isLoading={isLoading} arr={arr} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
