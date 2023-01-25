import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Create from "../routes/Create";
import Home from "../routes/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
