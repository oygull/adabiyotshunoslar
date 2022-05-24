import React from 'react'
import { Link } from 'react-router-dom'
import signinImg from '../images/signin-img.svg'

function SignIn() {
  return (
    <div className='sign'>
            <div className='sign__imgbox'>
              <img src={signinImg}/>
            </div>
            <div className="sign__desc">
              <h2 className='sign__title'>Sign in</h2>
              <p className='sign__text'>Do not you hava an account? <Link to='/signup'>Sign up</Link></p> 
              <form className='sign__form'>
              <input className='sign__input' type="email" placeholder='Email'/>
              <input className='sign__input' type="password" placeholder='Password'/>
              <button className='sign__btn' type='submit'>Next Step</button>
              </form>
            </div>
    </div>
  )
}

export default SignIn