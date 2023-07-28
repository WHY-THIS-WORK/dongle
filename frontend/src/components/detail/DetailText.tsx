import React from 'react'
import '../../css/detailText.css';

const DetailText = (list:any) => {

    return (
        <div className="detail_text">
            <span>{list.list.direction}
            </span>
        </div>
    )
}

export default DetailText;
