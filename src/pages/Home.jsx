import Slide from "components/HomeComponents/Slide";
import { useDispatch, useSelector } from "react-redux";
import Header from "components/Header";
import GroupCheck from "components/HomeComponents/GroupCheck";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { __initialization } from "../redux/modules/user";

function Home() {
  const { isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const accessTowken = localStorage.getItem("accessToken");
    dispatch(__initialization(accessTowken));
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
