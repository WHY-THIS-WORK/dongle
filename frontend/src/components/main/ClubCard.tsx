import React from 'react'
import '../../css/clubCard.css';

const ClubCard = () => {


    return (
        <div className="main3_card">
            {/* <div className="card_container"> */}
                <div className="top">
                    <div className="card_title">
                    <h3>프론트엔드 커뮤니티</h3>
                    </div>
                    <div className="card_category">
                        <span>코딩</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="card_detail">
                        <span>프론트엔드끼리 정보 공유와<br />
                            소통을 위한 동아리 입니다.
                        </span>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default ClubCard;
