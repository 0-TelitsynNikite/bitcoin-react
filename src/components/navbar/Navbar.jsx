import './navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <i className='icon bi bi-currency-bitcoin'></i>
            <h1 className="title">Купить биткоин</h1>
            <div className='navbar-wrapper'>
                <Link className='navbar__link' to="/buy">Купить</Link>
                <Link className='navbar__link' to="/sell">Продать</Link>
            </div>
        </div>
    )
}

export default Navbar;