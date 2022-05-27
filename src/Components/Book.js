import React from 'react'
import { Link } from 'react-router-dom'

function Book({item}) {
  return (
    <Link className='list__link' to={`/eachbook/${item.bookId}`}>
     <li className='book__item'>
      <img className='book__img' src={item.bookImg}/>
      <h3 className='book__name'>{item.bookName}</h3>
      <div className='book__div'>
        <p> <i  className='bx bxs-star'></i>  {item.bookRating}</p>
        <p>{item.audioTime}</p>
      </div>
   </li>
    </Link>
  
  )
}

export default Book