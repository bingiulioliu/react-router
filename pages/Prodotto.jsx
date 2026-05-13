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

    
    if (!productData) return <p>Caricamento...</p>;
    const { title, price, description, category, image, rating } = productData;
    const {rate}=rating;
    return <>
    

    <h1>{title}</h1>
    <img src={image} alt={title} />
    <p>{category}</p>
    <p>{price}</p>
    <p>{rate}</p>
    <p>{description}</p>
    {JSON.stringify(productData)}
    {errorMsg && <h1>{errorMsg}</h1> }
    </>
}

export default Prodotto;