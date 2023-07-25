import '../../css/sendBtn.css';

interface btnText{
    text:string;
}

const SendBtn = (props: btnText) => {
    return (
        <div className="btn-send">
            <button>{props.text}</button>
        </div>
    )
}

export default SendBtn;
