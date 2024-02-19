import Header from "components/Header";
import Slide from "components/Slide";
import { useDispatch, useSelector } from "react-redux";
import { __initialization } from "../redux/modules/user";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(__initialization());
  }, []);
  console.log(user);
  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }

  if (error) {
    return navigate("/login");
  }

  return (
    <>
      <Header />
      <Slide />
    </>
  );
}

export default Home;
