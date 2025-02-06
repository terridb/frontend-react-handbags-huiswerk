function Tile(props) {
    function decideImageOrText() {
        if (props.tileContainsImage) {
            return (
                <img src={props.tileImage} alt={props.tileTitle}/>
            );
        } else return (
            <>
                <h2>{props.tileTitle}</h2>
                {props.tileDescription.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </>
        );
    }

    return (
        <section>
            {decideImageOrText()}
        </section>
    )
}

export default Tile;