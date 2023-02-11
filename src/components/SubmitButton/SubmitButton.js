

function SubmitButton({caption, isValid}) {

    return (
        <button 
            disabled={!isValid} 
            type="submit"
            className={!isValid && "disableBtn"}
        >
            {caption}
        </button>
    )
}

export default SubmitButton;