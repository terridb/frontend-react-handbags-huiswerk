function Button({titleButton, disabledButton}) {
    function logTitle() {
        console.log(titleButton)
    }

    return (
        <button onClick={logTitle} disabled={disabledButton} type="button">{titleButton}</button>
    )
}

export default Button;