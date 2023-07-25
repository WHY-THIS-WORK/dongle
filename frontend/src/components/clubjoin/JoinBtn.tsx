import Btn from "./Btn";
import '../../css/joinBtn.css';

const JoinBtn = () => {

    const categories = ['코딩', '독서', '운동', '기타'];

    return (
        <div className="clubjoin_input-value">
            {categories.map((item, idx)=>{
                return(
                    <>
                        <Btn key={idx} text={item} />
                    </>
                )
            })}
        </div>
    )
}

export default JoinBtn;
