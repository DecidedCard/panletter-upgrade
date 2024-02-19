import Header from "components/Header";
import Slide from "components/Slide";
import { useDispatch, useSelector } from "react-redux";
import { __initialization } from "../redux/modules/user";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(__initialization());
    console.log(user);
  }, []);

  return (
    <>
      <Header />
      <Slide />
    </>
  );
}

export default Home;
