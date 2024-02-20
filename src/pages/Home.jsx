import Slide from "components/HomeComponents/Slide";
import { useDispatch, useSelector } from "react-redux";
import { __initialization } from "../redux/modules/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";
import GroupCheck from "components/HomeComponents/GroupCheck";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.user);
  const check = localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(__initialization(check));
  }, []);

  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }

  if (error) {
    return navigate("/login");
  }

  return (
    <>
      <main>
        <Header />
        <GroupCheck />
        <Slide />
      </main>
    </>
  );
}

export default Home;
