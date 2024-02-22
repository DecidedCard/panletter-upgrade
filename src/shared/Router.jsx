import Detail from "pages/Detail";
import Home from "pages/Home";
import Letter from "pages/Letter";
import Login from "pages/Login";
import Signup from "pages/SignCheck";
import UserProfile from "pages/UserProfile";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="letter/:id" element={<Letter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
