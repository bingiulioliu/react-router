import { BrowserRouter, Routes, Route } from "react-router";
import PrimoLayout from "../layouts/PrimoLayout";
import Homepage from "./components/Homepage";
import ChiSiamo from "./components/ChiSiamo";
import Prodotti from "./components/Prodotti";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrimoLayout/>}>
          <Route path="/" element={<Homepage/>} />
          <Route path="chi-siamo" element={<ChiSiamo/>} />
          <Route path="prodtti" element={<Prodotti/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
