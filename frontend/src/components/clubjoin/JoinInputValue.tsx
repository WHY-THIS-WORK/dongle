import { useRef } from 'react';
import '../../css/joinInputValue.css';

interface inputValue{
    placeholder : string;
    inputHandle : Function;
    title: string;
}

const JoinInputValue = (props : inputValue) => {

    const ref = useRef<HTMLInputElement>(null);

    const inputValue = (e: string) => {
        //input 요소의 value를 가져오기
        const value = e;

        // props로 전달된 함수 호출
        if(props.inputHandle){
            props.inputHandle(value, props.title);
        }
    }

    return (
        <div className="clubjoin_input-value">
            <input type='text' placeholder={props.placeholder}
                onChange={(e)=>inputValue(e.target.value)} ref={ref}/>
        </div>
    )
}

export default JoinInputValue;
