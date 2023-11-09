import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Aufera from "./auferaComp/Aufera";
import Acomart from "./acomartComp/Acomart";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auferaComp/aufera" element={<Aufera />} />
      <Route path="/acomartComp/acomart" element={<Acomart />} />
    </Routes>
  );
}

export default CustomRoutes;
