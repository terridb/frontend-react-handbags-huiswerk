function Button(props) {
    function logTitle() {
        console.log(props.titleButton)
    }

    return (
        <button onClick={logTitle} disabled={props.disabledButton} type="button">{props.titleButton}</button>
    )
}

export default Button;