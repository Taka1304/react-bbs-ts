import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import CreateThread from "./pages/CreateThread";

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      {/* スレッド一覧ページ */}
      <Route path="/" element={<App />} />
      {/* スレッド作成ページ */}
      <Route path="/thread/new" element={<CreateThread />} />
      {/* 各スレッド内ページ */}
      <Route path="/thread/:threadId" 
      // loader={}
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
