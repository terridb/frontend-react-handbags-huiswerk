function ProductCard(props) {
    return (
        <article>
            <span>{props.productLabel}</span>
            <img src={props.productImage} alt={props.productTitle}/>
            <p>{props.productTitle}</p>
            <h4>{props.productPrice}</h4>
        </article>
    )
}

export default ProductCard;