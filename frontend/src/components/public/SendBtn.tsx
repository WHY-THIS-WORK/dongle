
import '../../css/sendBtn.css';

interface btnText{
    text:string;
    sendBtnHandle:Function;
}

const SendBtn = (props: btnText) => {

    return (
        <div className="btn-send">
            <button onClick={()=>props.sendBtnHandle()}>{props.text}</button>
        </div>
    )
}

export default SendBtn;
