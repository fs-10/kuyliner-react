// import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./article/ArticlePage";
import HomePage from "./home/HomePage";
import ProfilePage from "./profile/ProfilePage";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default PageRoutes;
