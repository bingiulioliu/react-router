import { useParams } from "react-router";
import { fetchSingleProductData } from "../src/hooks/SingleProductFetch";
import { useState } from "react";
import { useEffect } from "react";


function Prodotto () {

    const {productId} = useParams();

    return <>
    <h1>Pagina prodotto {productId}</h1>
    </>
}

export default Prodotto;