function Button(props) {
    return (
        <button disabled={props.disabledButton} type="button">{props.titleButton}</button>
    )
}

export default Button;