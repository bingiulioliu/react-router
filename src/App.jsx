import { BrowserRouter, Routes, Route } from "react-router";
import PrimoLayout from "../layouts/PrimoLayout";
import Homepage from "../pages/Homepage";
import ChiSiamo from "../pages/ChiSiamo";
import Prodotti from "../pages/Prodotti";
import { useState, useEffect } from "react";
import { useProducts } from "./hooks/useProducts";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrimoLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="prodotti" element={<Prodotti/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
