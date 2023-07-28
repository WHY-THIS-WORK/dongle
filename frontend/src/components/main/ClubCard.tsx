
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/clubCard.css';

interface CardItem {
    category: number;
    clubId: number;
    deleted: number;
    name: string;
    boardName: string;
    description: string;
    direction: string;

}

const ClubCard = (props: CardItem) => {

    const navigate = useNavigate();

    //<br>태그에 끊어서 span태그 생성
    const textLines = props.description.split('<br>');

    console.log('clubId',props.clubId)

    const moveDetailHandle=()=>{
        navigate(`/detail/${props.clubId}`, { state: 1 })
    }

    return (
        <div className="main3_card" onClick={() => { moveDetailHandle() }}>
            <div className="top">
                <div className="card_title">
                    <h3>{props.name}</h3>
                </div>
                <div className="card_category">
                    <span>{props.category}</span>
                </div>
            </div>
            <div className="bottom">
                <div className="card_detail">
                    {textLines.map((line, index) => (
                        <span key={index}>{line}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ClubCard;
