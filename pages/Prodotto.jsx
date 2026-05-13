import { useParams } from "react-router";
import { fetchSingleProductData } from "../src/hooks/SingleProductFetch";
import { useState } from "react";
import { useEffect } from "react";


function Prodotto () {

    const {productId} = useParams();
    const [productData, setProductData] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    
    useEffect(()=>{
        fetchSingleProductData(productId)
        .then(data=>{
            setProductData(data);
        })
        .catch(error=>{
            setErrorMsg(error.message)
        })
    }, [productId])

    return <>
    <h1>Pagina prodotto {productId}</h1>
    {JSON.stringify(productData)}
    {errorMsg && <h1>{errorMsg}</h1> }
    </>
}

export default Prodotto;