import React from 'react'
import '../../css/clubCard.css';

type cardList = {
    title: string,
    category: string,
    text: string
}

const ClubCard = (props: cardList) => {

    //<br>태그에 끊어서 span태그 생성
    const textLines = props.text.split('<br>');

    return (
        <div className="main3_card">
            <div className="top">
                <div className="card_title">
                    <h3>{props.title}</h3>
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
