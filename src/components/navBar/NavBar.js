import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';


const NavBar = () => {

    const [toggleMobileNav, setToggleMobileNav] = useState(false);

    const mobileNav = () => {
        if (toggleMobileNav) {
            return (<div>
                <div className="backdrop" onClick={() => setToggleMobileNav(!toggleMobileNav)}></div>
                <nav className="mobile-nav">
                    <ul className="mobile-nav__items">
                        <li className="mobile-nav__item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="mobile-nav__item">
                            <Link to='/favorites'>Favorites</Link>
                        </li>
                    </ul>
                </nav>
            </div>)
        }
    }

    return (
        <div>
            <header className="main-header">
                <div>
                    <button className="toggle-button" onClick={() => setToggleMobileNav(!toggleMobileNav)}>
                        <span className="toggle-button__bar"></span>
                        <span className="toggle-button__bar"></span>
                        <span className="toggle-button__bar"></span>
                    </button>
                    <Link to='/' className='main-header__brand'>
                        <a> My Weather Task </a>
                    </Link>
                </div>
                <nav className="main-nav">
                    <ul className="main-nav__items">
                        <li className="main-nav__item">
                            <Link to='/'> Home </Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to='/favorites'>Favorites</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {mobileNav()}
        </div>
    )
}

export default NavBar;
