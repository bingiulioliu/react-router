import { BrowserRouter, Routes, Route } from "react-router";
import PrimoLayout from "../layouts/PrimoLayout";
import Homepage from "../pages/Homepage";
import ChiSiamo from "../pages/ChiSiamo";
import Prodotti from "../pages/Prodotti";
import { useState, useEffect } from "react";


const API_URL = 'https://fakestoreapi.com/products';

function App() {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    search: '',
    category: ''
  });

  // Carico i dati all'avvio
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleChange = (event) => {
    const target = event.target;
    const tagType = target.type;    // "text", "checkbox", ecc.
    const name = target.name;
    const value = target.value;   // per text/textarea/select/radio
    const checked = target.checked; // per checkbox (true/false)

    // Scegliamo il valore corretto in base al tipo di input
    const valueToUpdate = tagType === "checkbox" ? checked : value;

    setFilter({ ...products, [name]: valueToUpdate });
  };



  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrimoLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="prodotti" element={<Prodotti />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
