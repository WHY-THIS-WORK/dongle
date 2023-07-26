import '../../css/header.css';
import HeaderBtn from '../header/HeaderBtn';

const Header = () => {
    return (
        <header className='header'>
            <div className='header_container'>
                <div className='logo'>
                    로고
                </div>
                <div className='header_menu'>
                    <HeaderBtn address={'/clubjoin'} text={'동아리 신청'}/>
                    <HeaderBtn address={'/detail'} text={'동아리'}/>
                    <HeaderBtn address={'/mypage'} text={'MY'}/>
                </div>
            </div>
        </header>
    )
}

export default Header;
