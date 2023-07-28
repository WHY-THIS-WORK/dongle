import Btn from "./Btn";
import '../../css/joinBtn.css';

interface inputValue {
    inputHandle: Function;
    title: string;
}

const JoinBtn = (props: inputValue) => {

    const categories = ['코딩', '독서', '운동', '기타'];

    const inputProps = (e: string) => {
        const value = e;

        if(props.inputHandle){
            props.inputHandle(value, props.title);
        }
    }

    return (
        <div className="clubjoin_input-value">
            {categories.map((item, idx)=>{
                return(
                    <>
                        <Btn key={idx} text={item} inputProps={inputProps}/>
                    </>
                )
            })}
        </div>
    )
}

export default JoinBtn;
