function Tile({tileImage, tileTitle, children}) {
    function decideImageOrText() {
        if (tileImage) {
            return (
                <img src={tileImage} alt={tileTitle}/>
            );
        } else return (
            <>
                <h2>{tileTitle}</h2>
                {children}
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