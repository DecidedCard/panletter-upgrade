import { checkUser } from "api/fetchJWT";
import Header from "components/Header";
import Slide from "components/Slide";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const check = localStorage.getItem("accessToken");
  useEffect(() => {
    const fetchData = async () => {
      const result = await checkUser(check);
      if (result.name === "AxiosError") {
        return navigate("/login");
      }
      return result;
    };
    const result = fetchData();
  }, []);
  return (
    <>
      <Header />
      <Slide />
    </>
  );
}

export default Home;
