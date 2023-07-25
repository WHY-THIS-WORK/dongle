
interface btnText {
    text: string
}
const Btn = (props: btnText) => {

    return (
        <>
            <button>{props.text}</button>
        </>
    )
}

export default Btn;
