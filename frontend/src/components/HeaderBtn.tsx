import '../css/headerBtn.css';

interface navigate {
    address: string;
    text: string;
}

const HeaderBtn = (props: navigate) => {
    return (
        <>
            {props.text === 'MY' ?
                <div className='headerBtn'>
                    <span className='header_menu-mybtn'>{props.text}</span>
                </div>
                :
                <div>
                    <span className='header_menu-btn'>{props.text}</span>
                </div>
            }
        </>
    )
}

export default HeaderBtn;
