import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Aufera from "./auferaComp/Aufera";
import Acomart from "./acomartComp/Acomart";
import Parkstar from "./parkstarComp/Parkstar";
import Moovas from "./moovasComp/Moovas";
import MechoEnterprise from "./mechoEnterpriseComp/MechoEnterprise";
import MechoWebsite from "./mechoWebComp/MechoWebsite";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auferaComp/aufera" element={<Aufera />} />
      <Route path="/acomartComp/acomart" element={<Acomart />} />
      <Route path="/parkstarComp/parkstar" element={<Parkstar />} />
      <Route path="/moovasComp/moovas" element={<Moovas />} />
      <Route path="/mechoEnterpriseComp/mechoEnterprise" element={<MechoEnterprise />} />
      <Route path="/mechoWebComp/mechoWebsite" element={<MechoWebsite />} />
    </Routes>
  );
}

export default CustomRoutes;
