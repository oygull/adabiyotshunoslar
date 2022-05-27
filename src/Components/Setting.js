import React from 'react'
import { Link } from 'react-router-dom';
import user from '../images/user.png'

function Setting({setUserObj,userObj}) {

  const getValue=(e)=>{
    let obj= {}
    if(e.target.id==='fName'){
      obj.fname=e.target.value;
    }
    if(e.target.id==='lName'){
      obj.lname=e.target.value;
    }
    if(e.target.id==='phoneV'){
      obj.phone=e.target.value;
    }
    if(e.target.id==='emailV'){
      obj.email=e.target.value;
    }
    if(e.target.id==='address'){
      obj.password=e.target.value;
    }
    setUserObj({...userObj,...obj})
  }

  const submitForm=(e)=>{
    e.preventDefault();
    console.log(userObj);
  }
  
  return (
    <div className='container'> 
    <div className='edit__header'>
    <div className='profile__imgbox'>
      <img className='profile__img' src={user}/>
    </div>
    <div className='profile__desc'>
      <h2 className='profile__title'>Edit your Account</h2>
      <form onSubmit={submitForm} className='sign__form'>
      <input onChange={getValue} value={userObj.fname} id='fName' className='sign__input' type="text" placeholder='First Name' required/>
      <input onChange={getValue} value={userObj.lname}   id='lName' className='sign__input' type="text" placeholder='Last Name' required/>
      <input onChange={getValue} value={userObj.phone} id='phoneV' className='sign__input' type="number" placeholder='Phone' required/>
      <input onChange={getValue} value={userObj.email} id='emailV' className='sign__input' type="text" placeholder='Email' required/>
      <input onChange={getValue}  id='address' className='sign__input' type="password" placeholder='Password' required/>
    <Link to='/profile'> <button className='sign__btn' type='submit'>Save</button> </Link>
  
      </form>
    </div>
    </div>
</div>
  )
}

export default Setting