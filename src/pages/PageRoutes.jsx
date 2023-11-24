// import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login-register/login";
import ArticlePage from "./article/ArticlePage";
import HomePage from "./home/HomePage";
import ProfilePage from "./profile/ProfilePage";
import Register from "./login-register/register";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default PageRoutes;
