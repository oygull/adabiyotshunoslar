import React from 'react'
import { Link } from 'react-router-dom'
import signupImg from '../images/signup-img.svg'

function SignUp() {
  return (
    <div className='sign'>
    <div className='sign__imgbox'>
      <img src={signupImg}/>
    </div>
    <div className="sign__desc">
      <h2 className='sign__title'>Sign up</h2>
      <p className='sign__text'>Already have an account? <Link to='/signin'>Sign in</Link></p> 
      <form className='sign__form'>
      <input className='sign__input' type="text" placeholder='First Name'/>
      <input className='sign__input' type="text" placeholder='Last Name'/>
      <input className='sign__input' type="number" placeholder='Phone'/>
      <input className='sign__input' type="email" placeholder='Email'/>
      <input className='sign__input' type="password" placeholder='Password'/>
      <button className='sign__btn' type='submit'>Next Step</button>
      </form>
    </div>
</div>
  )
}

export default SignUp