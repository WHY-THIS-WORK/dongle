
interface btnText {
  text: string;
  inputProps: Function;
}

const Btn = (props: btnText) => {

  return (
    <>
      <button
        onClick={() => props.inputProps(props.text)}>
        {props.text}
      </button>
    </>
  )
}

export default Btn;
