import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "../features/Login";
import Dashboard from "../features/Dashboard";
import { ROUTE_LOGIN, ROUTE_DASHBOARD } from "./routes";

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTE_LOGIN} element={<Login />} />
      <Route path={ROUTE_DASHBOARD} element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
