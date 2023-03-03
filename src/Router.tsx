import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="/thread/" />
    </Routes>
  </BrowserRouter>
);

export default Router;
