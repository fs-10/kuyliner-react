// import React from "react";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./article/ArticlePage";
import HomePage from "./home/HomePage";
import ProfilePage from "./profile/ProfilePage";
import DetailPage from "./detail/DetailPage";
import EditProfile from "./edit-profile/EditProfile";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<DetailPage />} />
      <Route path="/" element={<ProfilePage />} />
      <Route path="/" element={<EditProfile />} />
      <Route path="/article" element={<ArticlePage />} />
    </Routes>
  );
}

export default PageRoutes;
