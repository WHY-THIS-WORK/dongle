import { useRef } from 'react';
import '../../css/JoinInputTextarea.css';

interface inputValue {
    inputHandle: Function;
    title: string;
}

const JoinInputTextarea = (props: inputValue) => {

    const ref = useRef<HTMLTextAreaElement>(null);

    const inputValue = (e: string) => {
        //input 요소의 value를 가져오기
        const value = e;

        // props로 전달된 함수 호출
        if (props.inputHandle) {
            props.inputHandle(value, props.title);
        }
    }

    return (
        <div className="clubjoin_input-value">
            <textarea placeholder='동아리를 통해 하고 싶은것들을 적어주세요.'
                onChange={(e) => inputValue(e.target.value)} ref={ref}/>
        </div>
    )
}

export default JoinInputTextarea;
