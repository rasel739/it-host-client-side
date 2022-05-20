import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home/Home";
import HostingDetails from "../pages/hostingDetails/HostingDetails";
import Login from "../pages/Login/Login";
import MyAccount from "../pages/MyAccount/MyAccount";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/hostingDetails/:id" element={<HostingDetails />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
