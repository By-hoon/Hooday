import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Create from "../routes/Create";
import Home from "../routes/Home";
import Management from "../routes/Management";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/management" element={<Management />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
