import '../../css/detailTitle.css';

const DetailTitle = (list:any) => {

    return (
        <div className="detail_title">
            <h1>{list.list.name}</h1>
            <span>{list.list.description}</span>
        </div>
    )
}

export default DetailTitle;
