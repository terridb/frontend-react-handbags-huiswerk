function Tile(props) {
    function decideImageOrText() {
        if (props.tileImage) {
            return (
                <img src={props.tileImage} alt={props.tileTitle}/>
            );
        } else return (
            <>
                <h2>{props.tileTitle}</h2>
                {props.children}
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