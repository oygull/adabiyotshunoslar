import React from 'react'
import logo from '../images/logo.svg'
import { Link } from "react-router-dom";
import headerImg from '../images/user.png'
import './Header.css'

const btnStatus=()=>{

}

function Header() {
  return (
   <header className='header'>
     <div className='container'>
      <div className='header__inner'>
        <a className='header__logo'> <img src={logo}/> </a>
        <nav className='header__nav'>
          <ul className='nav__list'>
          <Link className='nav__item' to="/">Bosh Sahifa</Link>
            <Link className='nav__item' to="/nasr">Nasr</Link>
            <Link className='nav__item' to="/nazm">Nazm</Link>
            <Link className='nav__item' to="/maqolalar">Maqolalar</Link>
            <Link className='nav__item' to="/forum">Forum</Link>
          </ul>
        </nav>
        <div className='header__part'>
        <Link to='/profile'>
        <div>
          <img className='header__img' src={headerImg} />
         </div>
         </Link> 
         <div className='dropdown'>
         <Link className='header__btns' to="/signup">Profile</Link>
         <Link className='header__btns' to="/setting">Settings</Link>
         </div>
        </div>
      </div>
     </div>
   </header>
  )
}

export default Header;