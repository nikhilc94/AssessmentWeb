import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ROUTE_LOGIN } from "./routes";
import Login from "../features/Login";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTE_LOGIN} element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
