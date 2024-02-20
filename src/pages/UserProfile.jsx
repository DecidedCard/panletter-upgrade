import Header from "components/Header";
import UserProfileInfo from "components/UserProfileComponents/UserProfileInfo";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __initialization } from "../redux/modules/user";
import EditProfile from "components/UserProfileComponents/EditProfile";

function UserProfile() {
  const { error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const check = localStorage.getItem("accessToken");
  const [changeCheck, setChangeCheck] = useState(false);

  useEffect(() => {
    dispatch(__initialization(check));
  }, []);

  if (error) {
    return navigate("/login");
  }
  return (
    <div>
      <Header />
      {!changeCheck ? (
        <UserProfileInfo setChangeCheck={setChangeCheck} />
      ) : (
        <EditProfile setChangeCheck={setChangeCheck} />
      )}
    </div>
  );
}

export default UserProfile;
