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
import { store } from "./redux/index";
import PublicRoute from "./component/routes/PublicRoute";
import PrivateRoute from "./component/routes/PrivateRoute";
import { useDispatch } from "react-redux";
import { housesSliceAction } from "./redux/housesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Api.getProjec().then((res) => {
      dispatch(housesSliceAction.setData(res.data));
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
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPages />
            </PublicRoute>
          }
        />
        <Route
          path="/create-ad"
          element={
            <PrivateRoute>
              <CreateAd />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard  />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
