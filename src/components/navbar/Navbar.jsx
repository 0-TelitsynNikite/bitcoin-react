import './navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const changeClass = (e) => {
        if (e.target.classList.contains('navbar__link')) {
            e.target.parentNode.childNodes.forEach(elem => elem.classList.remove('active'))
            e.target.classList.add('active')
        }
    }

    return (
        <div className='navbar'>
            <i className='icon bi bi-currency-bitcoin'></i>
            <h1 className="title">Купить биткоин</h1>
            <div onClick={(e) => changeClass(e)} className='navbar-wrapper'>
                <Link className='navbar__link active' to="/buy">Купить</Link>
                <Link className='navbar__link' to="/sell">Продать</Link>
            </div>
        </div>
    )
}

export default Navbar;