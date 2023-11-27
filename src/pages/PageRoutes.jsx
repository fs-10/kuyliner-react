import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login-register/login";
import HomePage from "./home/HomePage";
import ProfilePage from "./profile/ProfilePage";
import DetailPage from "./detail/DetailPage";
import EditProfile from "./edit-profile/EditProfile";
import LihatMenu from "./lihat-menu/LihatMenu";
import Register from "./login-register/register";

function PageRoutes() {
  return (
    <Routes>
       <Route path="/register" element={<Register />} />
      <Route path="/" element={<LihatMenu />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<DetailPage />} />
      <Route path="/" element={<ProfilePage />} />
      <Route path="/" element={<EditProfile />} />   
      <Route path="/login" element={<Login />} />
  
    </Routes>
  );
}

export default PageRoutes;
