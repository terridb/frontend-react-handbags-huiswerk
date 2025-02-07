function ProductCard({productLabel, productImage, productTitle, productPrice}) {
    function generatePriceString(price) {
        return `€${price},-`;
    }

    return (
        <article>
            <span>{productLabel}</span>
            <img src={productImage} alt={productTitle}/>
            <p>{productTitle}</p>
            <h4>{generatePriceString(productPrice)}</h4>
        </article>
    )
}

export default ProductCard;