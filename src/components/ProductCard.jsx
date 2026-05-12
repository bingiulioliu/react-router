

function ProductCard({image, title, category, price}) {
    return <>
        <div className="card h-100 shadow-sm col-3">
            <img src={image} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }}/>
            <div className="card-body d-flex d-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">{price}</p>
            </div>
        </div>
    </>;
}
export default ProductCard;