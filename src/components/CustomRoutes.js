import React from "react";
import { Route, Routes } from "react-router-dom";
import Aufera from "./auferaComp/Aufera";
import HomePage from "./HomePage";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auferaComp/aufera" element={<Aufera />} />
    </Routes>
  );
}

export default CustomRoutes;
