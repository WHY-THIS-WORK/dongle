import '../../css/joinInputTitle.css';

interface inputTitle{
    title:string;
}

const JoinInputTitle = (props : inputTitle) => {

    return (
        <div className="clubjoin_input-title">
            <span>{props.title}</span>
        </div>
    )
}

export default JoinInputTitle;
