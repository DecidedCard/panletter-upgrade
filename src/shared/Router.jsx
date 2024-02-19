import Detail from "pages/Detail";
import Home from "pages/Home";
import Letter from "pages/Letter";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="letter/:id" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
