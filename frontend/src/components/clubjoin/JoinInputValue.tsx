import '../../css/joinInputValue.css';

interface inputValue{
    placeholder : string;
}

const JoinInputValue = (props : inputValue) => {
    return (
        <div className="clubjoin_input-value">
            <input type='text' placeholder={props.placeholder} />
        </div>
    )
}

export default JoinInputValue;
