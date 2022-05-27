import React from 'react'
import user from '../images/user.png'
import book from '../images/book.png'
import headphones from '../images/headphones.png'

function Profile({userObj,newArr}) {
  return (
    <div className='container'>
      <div className='profile__header'>
          <div className='profile__imgbox'>
            <img className='profile__img' src={user}/>
            <p className='profile__p'>Oltin kitobxon</p>
            <p className='profile__par'>186 ta kitob o’qigan</p>
          </div>
          <div className='profile__desc'>
            <h3 className='profile__title'>{userObj.fname} {userObj.lname}</h3>
            <p className='profile__text'>Manzil: <span>Jizzah</span></p>
            <p className='profile__text'>Bio: <span>Graphic designer and Developer</span></p>
            <p className='profile__text'>Email: <span>{userObj.email}</span></p>
            <p className='profile__text'>Phone: <span>{userObj.phone}</span></p>
          </div>
      </div>
      <h2 className='profile__title book__tilte'>Javonga qo'shilganlar</h2>
      <ul className='saved__list'>
      {
            newArr.map((el,i)=>{
             return(
              <li key={i}  className='books__item'>
              <div className='imgbox'>
                <img src={el.bookImg}/>
              </div>
              <div className='authors__desc'>
                <h3 className='authors-title'>{el.bookName}</h3>
                <p className='author__year'>{el.bookInfo}</p>
                <div className='desc__inner'>
                  <p className='author__par author__par-r'> <img className='author__icon' src={book}/> {el.bookPage}</p>
                  <p className='author__par'> <img className='author__icon' src={headphones}/> {el.bookGenre}</p>
                </div>
              </div>
            </li>
             )
            })
          }
      </ul>
    
    </div>
  )
}

export default Profile