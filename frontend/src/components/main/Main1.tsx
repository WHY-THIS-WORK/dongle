import '../../css/main1.css';

const Main1 = () => {
    return (
        <div className="main1">
            <div className='main1_container'>
                <div className='main1_bg-top'>
                    <div className='top_circle-big'/>
                    <div className='top_circle-middle'/>
                    <div className='top_circle-small'/>
                </div>
                <div className='main1_bg-bottom'>
                    <div className='bottom_circle-big'/>
                    <div className='bottom_circle-middle'/>
                </div>
                <div className='main1_title-top'>
                    <span>다양한 사람들과</span>
                </div>
                <div className='main1_title-bottom'>
                    <span>동글!</span>
                </div>
                <div className='main1_circles'>
                    <div className='main1_circle-orange'/>
                    <div className='main1_circle-lineorange'/>
                    <div className='main1_circle-linewhite'/>
                </div>
                <div className='main1_subtitle'>
                    <span>언제 어디서든 다양한 사람들과 할 수 있으니까!<br/>
                        즐거운 동아리활동 함께해요!</span>
                </div>
            </div>
        </div>
    )
}

export default Main1;
