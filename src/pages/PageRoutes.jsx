import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./home/HomePage";
import ProfilePage from "./profile/ProfilePage";
import DetailPage from "./detail/DetailPage";
import EditProfile from "./edit-profile/EditProfile";
import LihatMenu from "./lihat-menu/LihatMenu";
import Login from "./auth-page/Login";
import Register from "./auth-page/Register";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/" element={<LihatMenu />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/" element={<EditProfile />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  );
}

export default PageRoutes;
