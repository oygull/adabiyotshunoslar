import React from 'react'
import logo from '../images/logo.svg'
import { Link } from "react-router-dom";
import headerImg from '../images/header-img.png'
import './Header.css'

function Header() {
  return (
   <header className='header'>
     <div className='container'>
      <div className='header__inner'>
        <a className='header__logo'> <img src={logo}/> </a>
        <nav className='header__nav'>
          <ul className='nav__list'>
          <Link className='nav__item' to="/main">Bosh Sahifa</Link>
            <Link className='nav__item' to="/nasr">Nasr</Link>
            <Link className='nav__item' to="/nazm">Nazm</Link>
            <Link className='nav__item' to="/maqolalar">Maqolalar</Link>
            <Link className='nav__item' to="/forum">Forum</Link>
          </ul>
        </nav>
        <div className='header__btns'>
          <img className='header__img' src={headerImg} />
          <button className='header-btn'><i className='bx bx-chevron-down'></i></button>
        </div>
      </div>
     </div>
   </header>
  )
}

export default Header;