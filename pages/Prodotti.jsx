import ProductCard from "../src/components/ProductCard";
import SearchBar from "../src/components/SearchBar";

function Prodotti({ products }) {

    if (!products) {
        return <p>Caricamento...</p>;
    }

    return <>

        <h1>Prodotti</h1>
        <SearchBar/>
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        image={product.image}
                    />
                ))}
            </div>
        </div>

    </>;
}

export default Prodotti;